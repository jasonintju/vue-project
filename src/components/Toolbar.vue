<template>
  <div class="toolbar">
    <router-link to="/" exact>
      <Icon type="ios-home-outline" size="18"></Icon>
      <span>首页</span>
    </router-link>
    <router-link to="/activity">
      <Icon type="ios-game-controller-b-outline" size="18"></Icon>
      <span>活动</span>
    </router-link>
    <router-link to="/shop">
      <Icon type="ios-cart-outline" size="18"></Icon>
      <span>积分商城</span>
    </router-link>
    <router-link to="/my" v-on:click.native.prevent="checkLoginStatus">
      <Icon type="person" size="18"></Icon>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
import util from './../util.js'
export default {
  name: 'toolbar',
  methods: {
    checkLoginStatus: function() {
      if (util.isLogin()) {
        this.$router.push('/my');
      } else {
        this.$router.push('/login');
      }
    }
  },
  data () {
    return {
      date: '2016\/11\/14 - 2017\/3\/3'
    }
  }
}
</script>

<style lang="scss">
.toolbar {
  width: 100%;
  height: 44px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  background-color: #423b3f;
}
.toolbar a {
  flex-grow: 1;
  padding-top: 5px;
  color: #929292;
  text-align: center;
  &.router-link-active{
    span, i {
      color: #fe484a;
    }
  }
  > span, > i {
    display: block;
  }
}
</style>
