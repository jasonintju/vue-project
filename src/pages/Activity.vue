<template>
  <div class="page-content">
    <Headerbar
      v-bind:has-back-link="false"
      title="活动">
    </Headerbar>
    <div>
      <div><a href=""><img src="../assets/scl.jpg" width="100%" style="border-radius: 3px;"></a></div>
      <div><a href=""><img src="../assets/l3.png" width="100%" style="margin-top: 15px;"></a></div>
      <div><a href=""><img src="../assets/lcard.png" width="100%" style="margin-top: 15px;"></a></div>
      <div><a href=""><img src="../assets/lword.png" width="100%" style="margin-top: 15px;"></a></div>
      <div><a href=""><img src="../assets/llook.png" width="100%" style="margin-top: 15px;"></a></div>
      <div><a href=""><img src="../assets/l4.png" width="100%" style="margin-top: 15px;"></a></div>
      <div><a href=""><img src="../assets/l5.png" width="100%" style="margin-top: 15px;"></a></div>
    </div>
    <Toolbar></Toolbar>
  </div>
</template>

<script>
import axios from 'axios'
import Headerbar from '../components/Headerbar'
import Toolbar from '../components/Toolbar'
export default {
  name: 'activity',
  components: {
      Headerbar,
      Toolbar
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
      show: function () {
          this.visible = true;
      }
  },
  created () {
    axios.get('/api/userCenter/queryUserProfile.json', {
        params: {
          appKey: 'cairenhuiweixin',
          timestamp: new Date().getTime()
        }
      })
      .then((response) => {
        let data = response.data.data;
        this.itemList = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

</script>

<style lang="scss" scoped>
.page-content {
  > div:first-child {
    padding: 15px 15px 44px;
    background-color: #eee;
  }
}
</style>
