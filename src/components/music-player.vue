<template>
  <div class="music-player">
    <music-list />
  </div>
</template>

<script>
import MusicList from './music-list.vue';

export default {
  name: 'MusicPlayer',
  components: {
    MusicList,
  },
  provide() {
    return {
      musicList: this.list,
      current: this.current,
      play: this.play,
      toggleLiked: this.toggleLiked,
    };
  },
  data() {
    return {
      list: [
        {
          id: 0,
          title: 'Music-1',
          artist: 'A',
          liked: false,
        },
        {
          id: 1,
          title: 'Music-2',
          artist: 'B',
          liked: true,
        },
        {
          id: 2,
          title: 'Music-3',
          artist: 'C',
          liked: false,
        },
        {
          id: 3,
          title: 'Music-4',
          artist: 'D',
          liked: false,
        },
      ],
      current: 0,
    };
  },
  computed: {
    nowPlaying() {
      if (this.list[this.current]) {
        return this.list[this.current];
      }

      return null;
    },
  },
  methods: {
    play(index) {
      console.log('play', index);
      this.current = index;
    },
    toggleLiked(id) {
      console.log('toggleLiked', id);
      for (let i = 0; i < this.list.length; i += 1) {
        if (this.list[i].id === id) {
          this.list[i].liked = !this.list[i].liked;
          break;
        }
      }
    },
  },
};
</script>
