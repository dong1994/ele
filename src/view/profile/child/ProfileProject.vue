<template>
    <section class="profile_project">
      <profile-project-item :order="project.order"></profile-project-item>
      <profile-project-item :order="project.integral"></profile-project-item>
      <profile-project-item class="member" :order="project.member"></profile-project-item>
      <profile-project-item :order="project.service"></profile-project-item>
      <profile-project-item :order="project.download"></profile-project-item>
    </section>
</template>

<script>
  import ProfileProjectItem from './ProfileProjectItem'

  import img from '../../../assets/img/profile/order.svg'

  export default {
    name: "ProfileProject",
    components: {
      ProfileProjectItem
    },
    data() {
      return {
        project: {
          order: {
            name: '我的订单',
            url: '/order',
            img
          },
          integral: {
            name: '积分商城',
            url: '/order',
            img
          },
          member: {
            name: '饿了么会员',
            url: '/order',
            img
          },
          service: {
            name: '服务中心',
            url: '/order',
            img
          },
          download: {
            name: '下载饿了么APP',
            url: '/order',
            img
          }
        }

      }
    }
  }
</script>

<style scoped>
  .profile_project {

  }

  .member {
    margin-bottom: 10px;
  }
</style>
