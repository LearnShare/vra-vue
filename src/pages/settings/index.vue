<template>
  <div>page-settings</div>
  <settings-nav></settings-nav>
  <hr>
  <router-view></router-view>
</template>

<script>
import SettingsNav from './nav.vue';

export default {
  name: 'PageSettings',
  components: {
    SettingsNav,
  },
};
</script>
