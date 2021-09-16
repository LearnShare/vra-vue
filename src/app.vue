<template>
  <toggle-button
      @change="buttonOnChange" />
  <div>volumn: {{ value }}</div>
  <volumn-bar
      v-model:volumn="value" />
</template>

<script>
import ToggleButton from '@/components/toggle-button.vue';
import VolumnBar from '@/components/volumn-bar.vue';

export default {
  name: 'App',
  components: {
    ToggleButton,
    VolumnBar,
  },
  data() {
    return {
      value: 40,
    };
  },
  methods: {
    buttonOnChange(data) {
      console.log(data);
    },
  },
};
</script>
