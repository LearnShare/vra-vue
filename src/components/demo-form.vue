<template>
  <h1>Form</h1>
  <h2>1. bind/event</h2>
  <button
      @click="updateCount">Count: {{ count }}</button>
  <p>textValue: {{ textValue }}</p>
  <input
      type="text"
      :value="textValue"
      @input="updateText">
  <p>checked: {{ checked }}</p>
  <input
      type="checkbox"
      :checked="checked"
      @change="updateChecked">
  <h2>2. model</h2>
  <ul>
    <li
        v-for="(value, key) in form"
        :key="key">{{ `${key}: ${value}` }}</li>
  </ul>
  <form
      @submit.prevent="">
    <h3>text</h3>
    <label>
      <span>input[type="text|password|number"]</span>
      <input
          type="text"
          v-model="form.username" />
    </label>
    <label>
      <span>textarea</span>
      <textarea
          v-model="form.comment"></textarea>
    </label>
    <h3>date</h3>
    <label>
      <span>date</span>
      <input
          type="date"
          v-model="form.date">
    </label>
    <h3>checkbox/radio & group</h3>
    <label>
      <span>checkbox</span>
      <input
          type="checkbox"
          v-model="form.rememberMe">
    </label>
    <label>
      <span>checkbox group</span>
      <div
          v-for="(option, index) in options"
          :key="index">
        <input
            type="checkbox"
            :value="option"
            v-model="form.groups">
        <span>{{ option }}</span>
      </div>
    </label>
    <label>
      <span>radio group</span>
      <div
          v-for="(option, index) in options"
          :key="index">
        <input
            type="radio"
            :value="option"
            v-model="form.group">
        <span>{{ option }}</span>
      </div>
    </label>
    <label>
      <span>select</span>
      <select
          v-model="form.picked">
        <option
            v-for="(option, index) in options"
            :key="index"
            :value="option">{{ option }}</option>
      </select>
    </label>
  </form>
</template>

<script>
export default {
  name: 'DemoForm',
  data() {
    return {
      // 1. bind/event
      count: 0,
      textValue: 'hi',
      checked: true,

      // 2. model
      options: [
        'A',
        'B',
        'C',
      ],
      form: {
        username: 'admin',
        comment: 'it\'s nice',
        date: '2021-09-12',
        rememberMe: false,
        groups: [
          'C',
        ],
        group: 'B',
        picked: 'A',
      },
    };
  },
  methods: {
    updateCount() {
      this.count += 1;
    },
    updateText(event) {
      this.textValue = event.target.value;
    },
    updateChecked(event) {
      this.checked = event.target.checked;
    },
  },
};
</script>

<style
    lang="scss"
    scoped>
label {
  display: block;
  margin-bottom: 12px;

  & > span {
    display: block;
  }
}
</style>
