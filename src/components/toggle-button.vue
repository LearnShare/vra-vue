<template>
  <button
      @click="toggleChecked">{{ checked ? 'ON' : 'OFF' }}</button>
</template>

<script>
export default {
  name: 'ToggleButton',
  emits: [
    'change',
  ],
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleChecked() {
      const checked = !this.checked;
      this.checked = checked;

      this.$emit('change', {
        checked,
      });
    },
  },
};
</script>
