<template>
  <div class="hello">
    <h1>Pagination</h1>
    
    <div>
      <button @click="prevPage">Prev </button>
      <button  v-for="(currentPage, index) in pages"
                 :key="index"
                 :currentPage="currentPage"
                 :class="{'active': activeClass(index)}"
                 @click="setCurrentPage(currentPage)">
      {{ currentPage }}
      </button>
      <button @click="nextPage">Next</button>
      <div>{{ currentPage }}</div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import * as types from '@/store/types';

export default {
  props: {
   pages: {
     type: Number,
     default: null
   },
    currentPage: {
     type: Number,
     default: null
   }
  },
  computed: {
   ...mapGetters ({
      getNextPage: types.GET_NEXT_PAGE,
      getPrevPage: types.GET_PREV_PAGE
    }),
  },
  methods: {
    ...mapActions({
      setCurrentPage: types.SET_CURRENT_PAGE,
    }),
    activeClass(key) {
      return ((key + 1) === this.currentPage) ? true : false;
    },
    nextPage(){
      if(this.getNextPage === null){
        this.setCurrentPage(this.currentPage)
      } else {
        this.setCurrentPage(this.currentPage+1)
      }
    }, 
     prevPage(){
      if(this.getPrevPage === null){
        this.setCurrentPage(this.currentPage)
      } else {
        this.setCurrentPage(this.currentPage-1)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .active {
    background-color: blue;
    color: white;
  }
</style>
