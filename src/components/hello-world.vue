<template>
  <h1>{{ msg }}</h1>
  <div>
    <span>in hello-world:</span>
    <toggle-button></toggle-button>
  </div>
</template>

<script>
export default {
  name: 'hello-world',
  props: {
    msg: String,
  },
};
</script>
