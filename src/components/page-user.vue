<template>
  <h2>page-user</h2>
  <h3>mutations</h3>
  <button
      @click="setUserData">setUserData</button>
  <button
      @click="setToken">setToken</button>
  <button
      @click="clear">clear</button>
  <h3>actions</h3>
  <button
      @click="login">login</button>
  <button
      @click="logout">logout</button>
</template>

<script>
import {
  mapMutations,
  mapActions,
} from 'vuex';

export default {
  name: 'PageUser',
  methods: {
    setUserData() {
      this.$store.commit('setUserData', {
        id: 222,
        name: 'nobody',
        userTypes: [
          'user',
        ],
      });
    },
    setToken() {
      this.$store.commit({
        type: 'setToken',
        token: 'new-token',
      });
    },
    ...mapMutations([
      'clear',
    ]),
    login() {
      this.$store.dispatch('login', {
        username: 'random',
        password: 'itsnotsafe',
      });
    },
    ...mapActions([
      'logout',
    ]),
  },
};
</script>
