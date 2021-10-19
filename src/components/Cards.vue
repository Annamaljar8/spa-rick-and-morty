<template>
  <div class="hello">
    <h1>Cards</h1>
    <div class="cards">
      {{ characters }}
      <Card />
      
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import { mapActions, mapGetters } from 'vuex';
import * as types from '@/store/types';

export default {
  data () {
    return {
      id: ''
    }
  },
  components: {
    Card
  },
  props: {
    // msg: String
  },
  computed: {
    ...mapGetters ({
      characters: types.CHARACTERS,
    })
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
