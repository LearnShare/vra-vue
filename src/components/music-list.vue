<template>
  <div class="music-list">
    <h2>music-list</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>playing</th>
          <th>liked</th>
          <th>title</th>
          <th>artist</th>
        </tr>
      </thead>
      <tbody>
        <music-item
            v-for="(item, index) of musicList"
            :key="item.id"
            :index="index"
            :data="item" />
      </tbody>
    </table>
  </div>
</template>

<script>
import MusicItem from './music-item.vue';

export default {
  name: 'MusicList',
  components: {
    MusicItem,
  },
  inject: [
    'musicList',
    'current',
  ],
};
</script>
