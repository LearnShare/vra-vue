<template>
  <h1>Vue Template</h1>
  <h2>1. HTML</h2>
  <p>{{ msg }}</p>
  <p>a + b = {{ a + b }}</p>
  <p
      v-text="msg"></p>
  <p>{{ htmlContent }}</p>
  <p
      v-html="htmlContent"></p>
  <h2>2. attr/class/style</h2>
  <button
      v-bind:id="submitBtnId"
      :disabled="!submitBtnEnabled">Submit</button>
  <button
      :class="{
        large: isLarge,
      }">Button</button>
  <button
      :class="btnClasses">Primary</button>
  <div
      :style="divStyle"></div>
  <h2>3. show/hide</h2>
  <div>
    <span
        v-show="showA">A</span>
    <br>
    <span
        v-if="showB">B</span>
    <span
        v-else>B not exist</span>
    <br>
    <span
        v-if="showItem === 'C'">C</span>
    <span
        v-else-if="showItem === 'D'">D</span>
    <span
        v-else>E</span>
  </div>
  <h2>4. for/key</h2>
  <ul>
    <li
        v-for="x in 3"
        :key="x">{{ x }}</li>
  </ul>
  <ol>
    <li
        v-for="(item, index) in forList"
        :key="index">{{ item.label }}</li>
  </ol>
  <div>
    <template
        v-for="(value, key, index) in forData"
        :key="value.id">
      <span>{{ `${key}: ${value.name}` }}</span>
      <br
          v-if="index < Object.keys(forData).length - 1">
    </template>
  </div>
</template>

<script>
export default {
  name: 'DemoTemplate',
  data() {
    return {
      // 1. html
      msg: 'value from data',
      htmlContent: '<strong>html content</strong>',
      a: 1,
      b: 2,

      // 2. attr/class/style
      submitBtnId: 'button-id',
      submitBtnEnabled: false,
      isLarge: true,
      btnClasses: {
        primary: true,
        large: false,
      },
      divStyle: {
        width: '100px',
        height: '50px',
        backgroundColor: '#AAF',
      },

      // 3. show/hide
      showA: false,
      showItem: 'D',

      // 4. for/key
      forList: [
        {
          label: 'A',
        },
        {
          label: 'B',
        },
        {
          label: 'C',
        },
      ],
      forData: {
        x: {
          id: 0,
          name: 'X',
        },
        y: {
          id: 1,
          name: 'Y',
        },
        z: {
          id: 2,
          name: 'Z',
        },
      },
    };
  },
};
</script>
