<template>
  <div>
    <h1>Card</h1>
    <div class="card">
      <img :src="charactersResult.image" :alt="charactersResult.name" class="card-img">
      <div>{{ charactersResult.id }}</div>
      <div>{{ charactersResult.name }}</div>
      <div>{{ charactersResult.gender }}</div>
      <div>{{ charactersResult.species }}</div>
      <div>{{ lastEpisode }}</div>
      <button @click="addToFavorite(charactersResult)">Add to favorite</button>
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
  charactersResult: {
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
      return this.charactersResult.episode[this.charactersResult.episode.length - 1] || ''
    }
  },
  methods: {
    ...mapMutations ({
      setFavorite: types.SET_FAVORITE,
    }),
    addToFavorite(){
      this.setFavorite(this.charactersResult);
      // console.log(this.charactersResult)
      console.log("1111", JSON.parse(JSON.stringify(this.charactersResult)));
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
