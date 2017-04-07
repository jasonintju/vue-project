<template>
  <div class="page-content">
    <Headerbar
      v-bind:has-back-link="true"
      title="登录">
    </Headerbar>
    <div class="form">
      <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="mobile">
      <input type="password" placeholder="请输入密码" v-model="password">
      <div class="image-code">
        <input type="text" maxlength="4" placeholder="请输入图片验证码" v-model="imageCode">
        <img :src="imageSrc" @click="changeImageSrc">
      </div>
      <Button type="primary" v-on:click.native="login">登录</Button>
      <div class="link-to-register">还没有账号？<router-link to="/register">立即注册</router-link></div>
    </div>
  </div>
</template>

<script>
import Headerbar from '../components/Headerbar'
import axios from 'axios'
import util from './../util.js'
export default {
  name: 'my',
  components: {
    Headerbar
  },
  data() {
    return {
      mobile: '',
      password: '',
      imageCode: '',
      imageSrc: 'http://apitest.china-invs.cn/imageCode/verifyCode.img'
    }
  },
  methods: {
    changeImageSrc: function() {
      this.imageSrc = 'http://apitest.china-invs.cn/imageCode/verifyCode.img?' + new Date().getTime();
    },
    login: function() {
      axios.get('/api/userCenter/userLogins.json', {
          params: {
            appKey: 'cairenhuiweixin',
            timestamp: new Date().getTime(),
            mobile: Base64.encode(this.mobile),
            password: Base64.encode(this.password),
            imageCode: Base64.encode(this.imageCode),
            zoneId: 20010
          }
        })
        .then((response) => {
          let data = response.data;
          if (data.errorNo == 0) {
            util.saveStorage('isLogin', 'true')
            this.$router.push('/my')
          } else {
            this.$Modal.info({title: '系统提示', content: data.errorInfo});
            return;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 15px;
}
.image-code {
  margin-bottom: 20px;

  &:before,
  &:after {
      content: " ";
      display: table;
  }
  &:after {
      clear: both;
  }

  input {
    width: 60%;
    float: left;
  }
  img {
    width: 35%;
    height: 44px;
    float: right;
  }
}
input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px 15px;
  display: block;
  width: 100%;
  margin-bottom: 12px;
}
button {
  display: block;
  width: 100%;
}
.link-to-register {
  text-align: center;
  margin-top: 20px;
}
</style>
