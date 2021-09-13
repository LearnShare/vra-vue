<template>
  <div
      class="root-a">root-a</div>
  <div
      class="root-b"
      v-bind="$attrs">root-b</div>
</template>

<script>
export default {
  name: 'MultipleRoot',
};
</script>
