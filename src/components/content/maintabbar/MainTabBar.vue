<template>
  <tab-bar>
    <tab-bar-item path="/msite">
      <img slot="item-icon" src="~assets/img/tabbar/msite.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/msite_active.svg" alt="">
      <div slot="item-text">外卖</div>
    </tab-bar-item>
    <tab-bar-item path="/search">
      <img slot="item-icon" src="~assets/img/tabbar/search.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/search_active.svg" alt="">
      <div slot="item-text">搜索</div>
    </tab-bar-item>
    <tab-bar-item path="/order">
      <img slot="item-icon" src="~assets/img/tabbar/order.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/order_active.svg" alt="">
      <div slot="item-text">订单</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
