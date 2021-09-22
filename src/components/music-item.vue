<template>
  <tr
      @dblclick="play(index)">
    <td>{{ index + 1 }}</td>
    <td>{{ index === current }}</td>
    <td
        @click="toggleLiked(data.id)">{{ data.liked }}</td>
    <td>{{ data.title }}</td>
    <td>{{ data.artist }}</td>
  </tr>
</template>

<script>
export default {
  name: 'MusicItem',
  inject: [
    'current',
    'play',
    'toggleLiked',
  ],
  props: {
    index: Number,
    data: Object,
  },
};
</script>
