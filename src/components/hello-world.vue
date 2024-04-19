<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<style
    scoped
    lang="scss"
    src="./hello-world.scss"></style>
