<template>
  <div class="demo-children">
    <p>defaultValue: {{ defaultValue }}</p>
    <p>numberValue * 2: {{ double }}</p>
    <p>stringValue: {{ stringValue }}</p>
    <p>list:</p>
    <ul>
      <li
          v-for="(item, index) in list"
          :key="index">{{ item }}</li>
    </ul>
    <p>config:</p>
    <ul>
      <li
          v-for="(value, key) in config"
          :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <p>
      <span>count: {{ count }}&nbsp;</span>
      <button
          @click="add">+ 2</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DemoChildren',
  props: {
    defaultValue: {
      type: String,
      default: 'default',
    },
    numberValue: Number,
    stringValue: String,
    list: Array,
    config: Object,
    count: Number,
    func: Function,
  },
  computed: {
    double() {
      return this.numberValue
        ? this.numberValue * 2
        : '';
    },
  },
  methods: {
    add() {
      this.func(2);
    },
  },
};
</script>
