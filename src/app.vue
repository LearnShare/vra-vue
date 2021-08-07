<template>
  <HelloWorld msg="HelloWorld" />
  <hello-world msg="hello-world" />
  <ni-hao msg="ni-hao"></ni-hao>
  <toggle-button></toggle-button>
</template>

<script>
import HelloWorld from '@/components/hello-world.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    'ni-hao': HelloWorld,
  },
};
</script>
