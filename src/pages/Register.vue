<template>
  <div class="page-content">
    <Headerbar
      v-bind:has-back-link="true"
      title="注册">
    </Headerbar>
    <p>Sorry to my visitors, there is no further register step.</p>
    <p>Please use my account for getting more information.</p>
    <p>Thank you.</p>

    <p>My account: 18626871369  871369</p>
    <p><router-link to="/login">立即登录</router-link></p>
  </div>
</template>

<script>
import Headerbar from '../components/Headerbar'
export default {
  name: 'register',
  components: {
    Headerbar
  }
}
</script>

<style lang="scss" scoped>
p {
  padding:5px 15px;
  &:last-child {
    text-align: center;
  }
}
</style>
