<template>
  <page-header />
  <page-user />
</template>

<script>
import PageHeader from '@/components/page-header.vue';
import PageUser from '@/components/page-user.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    PageUser,
  },
};
</script>
