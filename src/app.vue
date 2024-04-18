<template>
  <hello-world msg="Hello World from Vue" />
</template>

<script>
import HelloWorld from '@/components/hello-world.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
};
</script>
