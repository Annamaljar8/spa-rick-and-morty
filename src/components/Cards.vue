<template>
  <div class="hello">
    <h1>Cards</h1>
    <div class="cards">
      
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
  </div>
</template>

<script>
import Card from './Card.vue';
import Pagination from './Pagination.vue';
import { mapActions, mapGetters } from 'vuex';
import * as types from '@/store/types';

export default {
  data () {
    return {
    // currentPage: 5
    }
  },
  components: {
    Card,
    Pagination,
  },
  props: {
    // msg: String
  },
  computed: {
    ...mapGetters ({
      charactersResults: types.CHARACTERS,
      info: types.INFO,
      currentPage: types.GET_CURRENT_PAGE
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
    })
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
  height: 60vh;
  border: 2px solid black;
}
</style>
