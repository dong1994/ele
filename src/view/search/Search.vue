<template>
  <div class="search">
    <search-bar></search-bar>
  </div>
</template>

<script>
  import SearchBar from './child/SearchBar'

  export default {
    name: "Search",
    components: {
      SearchBar
    }
  }
</script>

<style scoped>

</style>
