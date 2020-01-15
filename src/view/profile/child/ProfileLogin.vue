<template>
  <section class="profile_login">
    <div class="login_c">
      <img class="login_head" src="~assets/img/profile/head.svg" alt="">
      <div class="login_info">
        <p class="login_status">登录/注册</p>
        <p class="login_phone">
          <img class="login_phone_icon" src="~assets/img/profile/phone.svg" alt="">
          <span class="login_phone_text">暂无绑定手机号</span>
        </p>
      </div>
      <img class="login_left" src="~assets/img/profile/right.svg" alt="">
    </div>
  </section>
</template>

<script>
  export default {
    name: "ProfileLogin"
  }
</script>

<style scoped>
  .profile_login {
    background-color: #3190e8;
    /*height: 50px;*/
  }

  .login_c {
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    background: #3190e8;
    padding: .666667rem .6rem;
  }

  .login_c .login_head {
    background: #fff;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    vertical-align: middle;
  }

  .login_c .login_info {
    margin-left: .48rem;
    -webkit-flex-grow: 1;
    flex-grow: 1;
  }

  .login_c .login_info .login_status {
    font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
  }

  .login_c .login_info .login_phone_icon {
    width: 0.8rem;
    /*height: 0.75rem;*/
    vertical-align: middle;
    /*margin-top: 2px;*/
  }
  .login_c .login_info .login_phone_text {
    /*display: inline-block;*/
    font-size: 0.57333rem;
    color: #fff;
  }

  .login_c .login_left {
    width: 0.46667rem;
    height: 0.98rem;
    display: inline-block;
    vertical-align: middle;
  }
</style>
