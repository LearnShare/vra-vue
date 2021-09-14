<template>
  <demo-slot />
</template>

<script>
import DemoSlot from '@/components/demo-slot.vue';

export default {
  name: 'App',
  components: {
    DemoSlot,
  },
};
</script>
