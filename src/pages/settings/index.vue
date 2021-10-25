<template>
  <div>page-settings</div>
  <settings-nav></settings-nav>
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
