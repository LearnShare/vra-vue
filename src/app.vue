<template>
  <h2>data</h2>
  <demo-clock />
  <h2>props</h2>
  <demo-parent />
  <h2>computed</h2>
  <demo-computed />
</template>

<script>
import DemoClock from '@/components/demo-clock.vue';
import DemoParent from '@/components/demo-parent.vue';
import DemoComputed from '@/components/demo-computed.vue';

export default {
  name: 'App',
  components: {
    DemoClock,
    DemoParent,
    DemoComputed,
  },
};
</script>
