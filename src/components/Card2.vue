<template>
  <div>
    <h1>Card</h1>
    <div class="card">
      <img :src="arrFavorite.image" :alt="arrFavorite.name" class="card-img">
      <div>{{ arrFavorite.id }}</div>
      <div>{{ arrFavorite.name }}</div>
      <div>{{ arrFavorite.gender }}</div>
      <div>{{ arrFavorite.species }}</div>
      <div>{{ lastEpisode }}</div>
      <button @click="deleteFromFavorite(arrFavorite)">Add to favorite</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import * as types from '@/store/types';

export default {
  props: {
    // lastEpisode: {
    //   type: Array,
    //   default: []
    // },
  arrFavorite: {
      type: Object,
      default: () => ({
        image: '',
        id: '',
        name: '',
        gender: '',
        species: '',
        episode: []
      }),
    },
  },
  computed: {
    lastEpisode() {
      return this.arrFavorite.episode[this.arrFavorite.episode.length - 1] || ''
    }
  },
  methods: {
    ...mapMutations ({
      deleteFavorite: types.DELETE_FAVORITE,
    }),
    deleteFromFavorite(){
      this.deleteFavorite(this.arrFavorite);
      // console.log(this.charactersResult)
      console.log("1111", JSON.parse(JSON.stringify(this.arrFavorite)));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card{
  width: 90vw;
  height: 3rem;
      display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: stretch;
    justify-content: flex-start;
    align-items: center;
}
.card-img{
  width: 2.688rem;
  height: 4.25rem;
  object-fit: cover;
}
</style>
