<template>
  <div class="computed">
    <p>sum: {{ sum }}</p>
    <label>
      <span>filter by:</span>
      <select
          v-model="filter">
        <option
            v-for="(option, index) in filterOptions"
            :key="index"
            :value="option">{{ option }}</option>
      </select>
    </label>
    <ul>
      <li
          v-for="item in filteredList"
          :key="item.id">{{ item.name }} - {{ item.size }}</li>
    </ul>
    <p>
      <span>value: {{ value }}, double: {{ double }}&nbsp;</span>
      <button
          @click="setDouble">Set double = 16</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'DemoComputed',
  data() {
    return {
      a: 1,
      b: 2,
      filterOptions: [
        'small',
        'medium',
        'large',
      ],
      filter: '',
      list: [
        {
          id: 1,
          name: '地瓜',
          size: 'large',
        },
        {
          id: 2,
          name: '土豆',
          size: 'medium',
        },
        {
          id: 3,
          name: '西红柿',
          size: 'small',
        },
      ],
      value: 3,
    };
  },
  computed: {
    sum() {
      return this.a + this.b;
    },
    filteredList() {
      if (this.filter) {
        return this.list
          .filter((item) => item.size === this.filter);
      }

      return this.list;
    },
    double: {
      get() {
        return this.value * 2;
      },
      set(value) {
        this.value = value / 2;
      },
    },
  },
  methods: {
    setDouble() {
      this.double = 16;
    },
  },
};
</script>
