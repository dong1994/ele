<template>
    <div class="profile">
      <profile-bar></profile-bar>
      <profile-login></profile-login>
      <profile-nav></profile-nav>
      <profile-project></profile-project>
    </div>
</template>

<script>
  import ProfileBar from './child/ProfileBar'
  import ProfileLogin from './child/ProfileLogin'
  import ProfileNav from './child/ProfileNav'
  import ProfileProject from './child/ProfileProject'
  export default {
    name: "profile",
    components: {
      ProfileBar,
      ProfileLogin,
      ProfileNav,
      ProfileProject
    }
  }
</script>

<style scoped>

</style>
