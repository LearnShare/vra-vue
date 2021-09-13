<template>
  <div class="single-root">single-root-component</div>
</template>

<script>
export default {
  name: 'SingleRoot',
  props: {
    attrA: String,
  },
  mounted() {
    console.log(this.$attrs);
  },
};
</script>
