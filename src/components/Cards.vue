<template>
  <div class="hello">
    <h1>Cards</h1>
    <button @click="allCharacters">All Characters</button>
    <button @click="favorites">Favorites</button>
    <div v-if="allCharacter" class="cards">
      <Card v-for="(charactersResult, index) in charactersResults"
                :key="index"
                :charactersResult="charactersResult"
                />
      <Pagination
        :current-page="currentPage"
        class="my-4"
        :pages="pagesLength"
      ></Pagination>
      
    </div>
    <div v-if="favorite" class="cards">
      <Card2 v-for="(arrFavorite, index) in arrFavorites"
                :key="index"
                :arrFavorite="arrFavorite"
                />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';
import Card2 from './Card2.vue';
import Pagination from './Pagination.vue';
import { mapActions, mapGetters } from 'vuex';
import * as types from '@/store/types';

export default {
  data () {
    return {
      allCharacter: false,
      favorite: false
    }
  },
  components: {
    Card,
    Card2,
    Pagination,
  },
  props: {
    // msg: String
  },
  computed: {
    ...mapGetters ({
      charactersResults: types.CHARACTERS,
      info: types.INFO,
      currentPage: types.GET_CURRENT_PAGE,
      arrFavorites: types.GET_FAVORITE,
    }),
    // charactersResults(){
    //   return this.characters?.results;
    // },
    pagesLength(){
      return this.info?.pages;
    },
    
    // lastEpisode(){
    //   // let arr =[]
    //   // let arr = this.characters?.results?.episode;
    //   console.log('40', this.characters?.results)
    // // return this.characters?.results
    // },
  },
  methods: {
    ...mapActions ({
      getCharacters: types.GET_CHARACTERS,
    }),
  allCharacters(){
    console.log(this.allCharacter);
      this.allCharacter = true;
      this.favorite = false;
    },
    favorites(){
      console.log(this.favorite);
      console.log(this.arrFavorites);
      this.favorite = true;
      this.allCharacter = false;

    }
  },
    mounted(){
    this.getCharacters(this.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cards {
  width: 90vw;
  height: 100%;
  border: 2px solid black;
}
</style>
