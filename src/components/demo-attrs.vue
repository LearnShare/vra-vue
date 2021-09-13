<template>
  <single-root
      attrA="A"
      attrB="B"
      id="x"
      class="y"
      style="color: red;"
      @click="childOnClick" />
  <multiple-root
      class="dark" />
</template>

<script>
import SingleRoot from './single-root.vue';
import MultipleRoot from './multiple-root.vue';

export default {
  name: 'DemoAttrs',
  components: {
    SingleRoot,
    MultipleRoot,
  },
  methods: {
    childOnClick(event) {
      console.log('click target: ', event.target);
    },
  },
};
</script>
