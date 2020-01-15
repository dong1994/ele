<template>
  <div class="project" @click="jupmView">
    <aside>
      <img :src="order.img" alt="">
    </aside>
    <div class="project_content">
      <span>{{order.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileProjectItem",
    props : {
      order : {
        type: Object
      }
    },
    methods: {
      jupmView() {
        this.$router.push(this.order.url)
      }
    }
  }
</script>

<style scoped>
  .project {
    padding-left: 1.6rem;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #fff;
  }

  .project aside {
    width: 1rem;
    height: 1rem;
    margin-left: -.866667rem;
    margin-right: .266667rem;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .project aside img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .project_content {
    width: 100%;
    border-bottom: 1px solid #f1f1f1;
    padding: .433333rem .266667rem .433333rem 0;
    font-size: 0.7rem;
    color: #333;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
</style>
