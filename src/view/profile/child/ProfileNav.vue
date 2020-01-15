<template>
  <ul class="profile_nav">
    <li class="profile_nav_item">
      <span class="item_text">
        <b class="money">0.00</b>元
      </span>
      <span class="item_name">我的余额</span>
    </li>
    <li class="profile_nav_item">
      <span class="item_text">
        <b class="discount">0</b>个
      </span>
      <span class="item_name">我的优惠</span>
    </li>
    <li class="profile_nav_item">
      <span class="item_text">
        <b class="integral">0</b>分
      </span>
      <span class="item_name">我的积分</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "ProfileNav"
  }
</script>

<style scoped>
  .profile_nav {
    display: flex;
    font-size: 0.8rem;
    background-color: #fff;
    margin-bottom: 10px;
  }

  .profile_nav_item {
    flex: 1;
    text-align: center;
    border-right: 1px solid #f1f1f1;
  }

  .profile_nav_item:nth-child(3) {
    border-right: none;
  }

  .profile_nav_item span {
    display: block;
    width: 100%;
    text-align: center;
  }

  .item_text {
    padding: .853333rem 0 .453333rem;
    /*margin-bottom: 5px;*/
  }

  .item_text b {
    display: inline-block;
    font-size: 1.2rem;
    color: #f90;
    font-weight: 700;
    line-height: 1rem;
    font-family: Helvetica Neue,Tahoma;
  }

  .item_text .discount {
    color: #ff5f3e;
  }

  .item_text .integral {
    color: #6ac20b;
  }

  .item_name {
    font-size: 0.57333rem;
    color: #666;
    font-weight: 400;
    padding-bottom: .453333rem;
  }
</style>
