<template>
  <div class="slot-props">
    <slot
        :data="data"></slot>
  </div>
</template>

<script>
export default {
  name: 'SlotProps',
  data() {
    return {
      data: {
        name: 'abc',
        value: 123,
      },
    };
  },
};
</script>
