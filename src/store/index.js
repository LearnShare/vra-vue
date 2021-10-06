import {
  createStore,
} from 'vuex';

import AuthAPI from '../api/auth';
import menuModule from './menu';

const store = createStore({
  state() {
    return {
      // JWT token
      token: 'jwt-token',
      userData: {
        id: 123,
        name: 'Admin',
        userTypes: [
          'admin',
          'user',
        ],
      },
    };
  },
  getters: {
    hasLogin: (state) => !!(state.token && state.userData),
    userId: (state) => (state.userData && state.userData.id),
    hasUserType: (state) => (type) => {
      if (!state.userData) {
        return false;
      }

      const {
        userTypes,
      } = state.userData;
      return userTypes
          && userTypes.indexOf(type) >= 0;
    },
  },
  mutations: {
    setToken(state, data) {
      state.token = data.token;
    },
    setUserData(state, data) {
      state.userData = data;
    },
    clear(state) {
      state.token = '';
      state.userData = null;
    },
  },
  actions: {
    login(context, data) {
      const {
        commit,
      } = context;
      const {
        username,
        password,
      } = data;

      AuthAPI.login(username, password)
        .then((res) => {
          const {
            token,
            userData,
          } = res.data;

          commit('setToken', {
            token,
          });
          commit('setUserData', userData);
        });
    },
    logout({ commit }) {
      commit('clear');
    },
  },
  modules: {
    menu: menuModule,
  },
});

export default store;
