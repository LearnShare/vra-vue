<template>
  <p>now: {{ now }}</p>
  <p>datetime: {{ formatDateTime(now) }}</p>
</template>

<script>
export default {
  name: 'DemoClock',
  data() {
    this.timer = null;

    return {
      now: new Date(),
    };
  },
  mounted() {
    this.timer = window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
  beforeUnmount() {
    if (this.timer) {
      window.clearInterval(this.timer);
    }
  },
  methods: {
    formatDateTime(time) {
      return time.toLocaleString();
    },
  },
};
</script>
