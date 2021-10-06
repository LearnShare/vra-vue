export default {
  namespaced: true,
  state: () => ({
    menus: [
      {
        value: 'home',
        label: 'Home',
        icon: 'home',
      },
      {
        value: 'about',
        label: 'About',
        icon: 'help',
      },
    ],
    active: 'home',
  }),
  mutations: {
    switchTo(state, data) {
      state.active = data.value;
    },
  },
};
