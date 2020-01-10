<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) != -1
      }
    },
    methods: {
      itemClick() {
        if (this.$route.path != this.path) {
          this.$router.push(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;

    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
</style>
