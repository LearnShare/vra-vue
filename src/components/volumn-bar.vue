<template>
  <div class="volumn-bar">
    <button
        @click="update(-10)">-</button>
    <span>{{ volumn }}</span>
    <button
        @click="update(10)">+</button>
  </div>
</template>

<script>
export default {
  name: 'VolumnBar',
  emits: [
    'update:volumn',
  ],
  props: {
    volumn: Number,
  },
  methods: {
    update(value) {
      const newValue = this.volumn + value;

      if (newValue >= 0
          && newValue <= 100) {
        this.$emit('update:volumn', newValue);
      }
    },
  },
};
</script>
