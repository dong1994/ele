<template>
  <div class="tab-bar" id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    components: {
    }
  }
</script>

<style scoped>
.tab-bar{
  display: flex;
  background-color: #f6f6f6;

  z-index: 9;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
