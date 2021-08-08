<template>
  <h1>Style</h1>
  <h2>1. inline style</h2>
  <p
      :style="{
        fontSize: '16px',
      }">inline style object</p>
  <p
      :style="styleObject">style object from data</p>
  <p
      :style="[styleA, styleB]">multiple style object</p>
  <h2>2. style with class</h2>
  <p class="error">error message</p>
  <p
      :class="infoStyle">warning message</p>
  <button class="btn btn-primary">Bootstrap</button>
  <p class="parent">
    <span>deep match</span>
    <child-span />
  </p>
  <h2>3. css modules</h2>
  <p
      :class="$style.mark">mark</p>
  <p
      :class="darkStyles.dark">dark</p>
</template>

<script>
import darkStyles from '@/css/dark.module.scss';

import ChildSpan from './child-span.vue';

export default {
  name: 'DemoStyle',
  components: {
    ChildSpan,
  },
  data() {
    return {
      // 1. inline style
      styleObject: {
        fontSize: '16px',
        color: '#AAF',
      },
      styleA: {
        fontSize: '14px',
      },
      styleB: {
        color: '#FAA',
      },

      // 2. style with class
      infoStyle: {
        info: true,
        warning: true,
      },

      // 3. css modules
      darkStyles,
    };
  },
};
</script>

<style
    lang="scss"
    scoped>
.error {
  color: red;
}

.parent::v-deep {
  color: #333;

  .children {
    color: blue;
  }
}
</style>

<style
    module>
.mark {
  font-weight: bold;
  background-color: #FFC;
}
</style>
