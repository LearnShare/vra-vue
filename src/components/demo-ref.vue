<template>
  <h2>ref</h2>
  <input
      type="text"
      name="username"
      ref="usernameInput">
  <ul>
    <li
        v-for="(item, index) in list"
        :key="index"
        :ref="refItems">{{ item }}</li>
  </ul>
  <input
      type="password"
      name="password"
      :ref="autoHint">
  <hello-world
      msg="hello"
      ref="helloWorldElement" />
  <button
      @click="mute">mute</button>
</template>

<script>
import HelloWorld from './hello-world.vue';

export default {
  name: 'DemoRef',
  components: {
    HelloWorld,
  },
  data() {
    return {
      list: [
        'A',
        'B',
        'C',
      ],
      listItems: [],
    };
  },
  mounted() {
    this.focus();
    console.log(this.listItems);
  },
  methods: {
    focus() {
      const {
        usernameInput,
      } = this.$refs;

      if (usernameInput) {
        usernameInput.focus();
      }
    },
    refItems(el) {
      this.listItems.push(el);
    },
    autoHint(el) {
      el.setAttribute('placeholder', el.name);
    },
    mute() {
      const {
        helloWorldElement,
      } = this.$refs;

      if (helloWorldElement) {
        // 访问自定义组件的属性和方法
        console.log(helloWorldElement.msg);
        helloWorldElement.mute();
      }
    },
  },
};
</script>
