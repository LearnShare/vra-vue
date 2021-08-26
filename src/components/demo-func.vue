<template>
  <h2>watch</h2>
  <div>汉堡: {{ number }}</div>
  <div>
    <button
        @click="order(-1)">-1</button>
    <button
        @click="order(1)">+ 1</button>
  </div>
  <p
      class="error"
      v-if="alert">会不会太多了？</p>
</template>

<script>
export default {
  name: 'DemoFunc',
  data() {
    return {
      number: 0,
      alert: false,
    };
  },
  // computed: {
  //   alert() {
  //     return this.number >= 3;
  //   },
  // },
  watch: {
    number(newValue) {
      this.alert = newValue >= 3;
    },
  },
  methods: {
    order(value) {
      if (value === -1
          && this.number <= 0) {
        return;
      }

      this.number += value;
    },
  },
};
</script>

<style
    lang="scss"
    scoped>
.error {
  font-weight: bold;
  color: red;
}
</style>
