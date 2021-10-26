<template>
  <Header />
  <Cards />
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Cards from './components/Cards.vue';
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
    Header,
    Cards,
    Pagination
  }
}
</script>

<style lang="scss">

</style>
