<template>
  <h2>page-header</h2>
  <h3>store.state</h3>
  <ul>
    <li>token: {{ token }}</li>
    <li>userData: {{ userData && JSON.stringify(userData) }}</li>
    <li>hasLogin: {{ hasLogin }}</li>
    <li>isAdmin: {{ isAdmin }}</li>
    <li>userId: {{ userId }}</li>
  </ul>
  <h3>nav - {{ active }}</h3>
  <ul>
    <li
        v-for="item in menus"
        :key="item.value"
        @click="switchTo(item.value)">{{ item.label }}</li>
  </ul>
</template>

<script>
import {
  mapState,
  mapGetters,
} from 'vuex';

export default {
  name: 'PageHeader',
  computed: {
    token() {
      return this.$store.state.token;
    },
    ...mapState({
      userData: (state) => state.userData,
      menus: (state) => state.menu.menus,
      active: (state) => state.menu.active,
    }),
    hasLogin() {
      return this.$store.getters.hasLogin;
    },
    isAdmin() {
      return this.$store.getters.hasUserType('admin');
    },
    ...mapGetters([
      'userId',
    ]),
  },
  methods: {
    switchTo(value) {
      this.$store.commit({
        type: 'menu/switchTo',
        value,
      });
    },
  },
};
</script>
