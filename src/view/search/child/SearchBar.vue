<template>
  <top-bar class="header">
    <img slot="left" src="~assets/img/topbar/back.svg" alt="">
    <h2 slot="center">搜索</h2>
  </top-bar>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar'

  export default {
    name: "ProfileBar",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .header img{
    margin-top: 4px;
  }
  .header h2 {
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
  }
</style>
