<template>
  <div class="page-content">
    <Headerbar
      v-bind:has-back-link="false"
      title="我的">
    </Headerbar>
    <div class="profiles">
      <div class="avatar"><span>头像：</span><img :src="profiles.avatar" width="50%"></div>
      <div><span>昵称：</span>{{profiles.userNick}}</div>
      <div><span>手机：</span>{{profiles.mobile}}</div>
      <div><span>职业：</span>{{profiles.job}}</div>

      <Button type="warning" v-on:click.native="logout">退出</Button>
    </div>

    <Toolbar></Toolbar>
  </div>
</template>

<script>
import Headerbar from '../components/Headerbar'
import Toolbar from '../components/Toolbar'
import axios from 'axios'
import util from './../util.js'
export default {
  name: 'my',
  components: {
    Headerbar,
    Toolbar
  },
  data() {
    return {
      profiles: {}
    }
  },
  methods: {
    logout: function() {
      axios.get('/api/userCenter/userLoginOut.json', {
        params: {
          appKey: 'cairenhuiweixin',
          timestamp: new Date().getTime()
        }
      })
      .then((response) => {
        util.deleteStorage();
        this.$router.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },
  created() {
    if (!util.isLogin()) {
      this.$router.push('./');
    }
    axios.get('/api/userCenter/queryUserProfile.json', {
        params: {
          appKey: 'cairenhuiweixin',
          timestamp: new Date().getTime()
        }
      })
      .then((response) => {
        this.profiles = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  padding-bottom: 5px;
  border-bottom: 1px solid #ccc;
  img {
    vertical-align: middle;
  }
}
.profiles {
  padding: 30px 15px;
  font-size: 20px;
  > div {
    margin-bottom: 15px;
  }
  span {
    margin-right: 15px;
  }
}
button {
  display: block;
  width: 100%;
  margin-top: 100px;
}
</style>
