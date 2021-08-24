<template>
  <demo-children
      :numberValue="12"
      :string-value="msg"
      :list="sizes"
      :config="config"
      :count="count.value"
      :func="addNumber" />
</template>

<script>
import DemoChildren from './demo-children.vue';

export default {
  name: 'DemoParent',
  components: {
    DemoChildren,
  },
  data() {
    return {
      msg: 'Hello',
      sizes: [
        'small',
        'medium',
        'large',
      ],
      config: {
        x: 1,
        y: 'B',
        z: false,
      },
      count: {
        value: 0,
      },
    };
  },
  methods: {
    addNumber(value) {
      this.count.value += value;
    },
  },
};
</script>
