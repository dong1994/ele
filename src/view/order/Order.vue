<template>
    <div class="order">
      <order-bar></order-bar>
    </div>
</template>

<script>
  import OrderBar from './child/OrderBar'
  export default {
    name: "Order",
    components: {
      OrderBar
    }
  }
</script>

<style scoped>

</style>
