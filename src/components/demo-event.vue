<template>
  <h1>Event</h1>
  <div>
    <span>count: {{ count }}&nbsp;</span>
    <button
        v-on:click="count += 1">Add 1</button>
  </div>
  <div>
    <p>input value: {{ inputValue }}</p>
    <input
        type="text"
        @input="textChanged">
  </div>
  <ul>
    <li
        v-for="(item, index) in list"
        :key="index"
        @click="listItemOnClick($event, 'click', index)">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'DemoEvent',
  data() {
    return {
      count: 0,
      inputValue: '',
      list: [
        'A',
        'B',
        'C',
      ],
    };
  },
  methods: {
    textChanged(event) {
      this.inputValue = event.target.value;
    },
    listItemOnClick(event, type, index) {
      console.log(event.target, type, index);
    },
  },
};
</script>
