<template>
  <div class="header_bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
  }
</script>

<style scoped>
  .header_bar {
    display: flex;
    height: 39px;
    line-height: 39px;
    background-color: #3190e8;
    text-align: center;
  }
  .left,
  .right{
    width: 40px;
  }
  .center {
    flex: 1;
    color: #fff;
  }
</style>
