<template>
  <p>{{ muted ? '(muted)' : msg }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      muted: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    mute() {
      this.muted = true;
    },
  },
};
</script>
