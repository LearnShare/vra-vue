import {
  defineComponent,
} from 'vue/dist/vue.esm-bundler';

const ToggleButton = defineComponent({
  name: 'toggle-button',
  template: `
    <button
        @click="toggleChecked">{{ checked ? 'ON' : 'OFF' }}</button>
  `,
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    toggleChecked() {
      this.checked = !this.checked;
    },
  },
});

export default ToggleButton;
