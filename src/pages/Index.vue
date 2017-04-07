<template>
  <div class="page-vs-index page-content">
    <Headerbar
      v-bind:has-back-link="false"
      title="大赛">
    </Headerbar>
    <Toolbar></Toolbar>
    <div class="vss">
      <div class="first-row">
        <a href=""><div class="vs"><img class="icontip" src="../assets/final-tip.png" alt=""><img src="../assets/final-bgc.png" width="65%"><span>天下牛人汇总决赛</span></div></a><!--
        --><a class="with-tip" tag="zt" href="javascript:void(0);"><div class="vs"><img src="../assets/ztnrh-bgc.png" width="65%"><span>中投牛人汇</span></div></a><!--
        --><a class="goVstock" tag="tx" href="javascript:void(0);"><div class="vs vs34"><img src="../assets/txnrh-bgc.png" width="65%"><span>腾讯牛人汇</span></div></a>
      </div>
      <div class="second-row">
        <a class="goVstock" tag="sm" href="javascript:void(0);"><div class="vs"><img src="../assets/smnrh-bgc.png" width="65%"><span>私募牛人汇</span></div></a><!--
        --><a class="with-tip" tag="lm" href="javascript:void(0);"><div class="vs"><img src="../assets/lmnrh-bgc.png" width="65%"><span>联盟牛人汇</span></div></a><!--
        --><a class="with-tip" tag="mm" href="javascript:void(0);"><div class="vs vs34"><img src="../assets/mmnrh-bgc.png" width="65%"><span>蒙面牛人汇</span></div></a>
      </div>
    </div>

    <div class="activity">
      <div class="title"><span class="title-name">精彩活动</span><span class="show-more"><a href="activity.html">显示全部 ></a></span></div>
      <div class="activity-row">
        <img src="../assets/activity5.png" class="activity-col-33 activity-img-href" style="border-radius: 3px;">
        <img src="../assets/activity1.png" class="activity-col-33 activity-img-href" alt="">
        <img src="../assets/activity2.png" class="activity-col-33 activity-img-href" alt="">
        <img src="../assets/activity3.png" class="activity-col-33 activity-img-href" alt="">
        <img src="../assets/activity6.png" class="activity-col-33 activity-img-href" alt="">
        <img src="../assets/activity4.png" class="activity-col-33 activity-img-href" alt="">
      </div>
    </div>
    <div class="download">
      <div class="title"><span>热门下载</span></div>
      <div class="row">
        <div class="col-50 left"><a target="_parent" href="http:\/\/www.china-invs.cn/web001/wbtg/tencent/mobile/tencent_ykh.html">
          <div class="ykh-block">
            <div class="ykh-left">
              <div class="ykh-name">易开户</div>
              <div class="ykh-text">3分钟极速开户</div>
            </div>
            <img src="../assets/ykh.png" width="30%">
          </div>
        </a></div>
        <div class="col-50 right"><a target="_parent" href="http:\/\/www.china-invs.cn/web001/wbtg/tencent/mobile/tencent_zzt.html">
          <div class="ykh-block">
            <div class="ykh-left">
              <div class="ykh-name">掌中投</div>
              <div class="ykh-text">高手牛股随时看</div>
            </div>
            <img src="../assets/zzt.png" width="30%">
          </div>
        </a></div>
      </div>
    </div>

    <div class="tc-ad-block">
      <a href="http:\/\/www.china-invs.cn/web001/wbtg/tencent/mobile/tencent_zzt.html">
        <img src="../assets/tc-ad-zt.png" width="100%" alt="">
      </a>
    </div>
    <div class="foot-logo"></div>
  </div>
</template>

<script>
import Headerbar from '../components/Headerbar'
import Toolbar from '../components/Toolbar'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
      Headerbar,
      Toolbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vss {
  background-color: #111d57;
  padding-bottom: 7px;
}
.first-row {
  height: 90px;
  background-image: url(../assets/vss-top.png);
  background-repeat:  no-repeat;
  background-size: 100% 100%;
}
.second-row {
  height: 90px;
  background-image: url(../assets/vss-bottom.png);
  background-repeat:  no-repeat;
  background-size: 100% 100%;
  border-bottom: 1px solid #5ca7f5;
}
.row {
  border-top: none;
}
.vs {
  position: relative;
  display: inline-block;
  width: 33%;
  height: 90px;
  color: #ffffff;
  border-left: 1px solid #5ca7f5;
  border-top: 1px solid #5ca7f5;
  box-sizing: border-box;
}
.vs:nth-child(3n) {
  border-right: 1px solid #5ca7f5;
}
.vs34 {
  width: 34%;
}
.vs img {
  position: absolute;
  top: 9px;
  right: 50%;
  transform: translateX(50%);
  width: 50px;
}
.vs .icontip {
  top: 0;
  right: 0;
  width: 25%;
  transform: translateX(0);
  z-index: 1;
}
.vs span {
  position: absolute;
  display: block;
  width: 100%;
  bottom: 9px;
  left: 0;
  text-align: center;
  text-shadow: 2px 2px 2px #000000;
  font-size: 10px;
}

.page-vs-index .title {
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffffff;
}
.page-vs-index .title .title-name {
  font-weight: bold;
  text-shadow: 2px 2px 2px #000000;
  font-size: 14px;
}
.page-vs-index .activity {
  background-image: url(../assets/activity-bg.png);
  background-size: 100% 100%;
}
.page-vs-index .activity .activity-row {
  padding: 11px 11px 1px 11px;
  width: 100%;
  box-sizing: border-box;
}
.page-vs-index .activity .activity-row .activity-col-33 {
  display: inline-block;
  width: 32%;
}
.page-vs-index .activity .show-more {
  float: right;
}
.page-vs-index .activity .show-more a {
  color: #ffffff;
  font-size: 10px;
}
.page-vs-index .activity img {
  margin-bottom: 10px;
}
.page-vs-index .download {
  padding-top: 10px;
  background-color: #111d57;
}
.page-vs-index .download .title {
  background-color: #3975e6;
  margin-bottom: 0;
  font-weight: bold;
  text-shadow: 2px 2px 2px #000000;
  font-size: 14px;
}
.page-vs-index .download .col-50 {
  width: calc(50%);
  padding: 20px 10px;
  background: -webkit-linear-gradient(top, #326ccf, #1f4fbf);
  background: linear-gradient(180deg, #326ccf, #1f4fbf);
  height: 80px;
  box-sizing: border-box;
}
.page-vs-index .download .col-50 .ykh-block .ykh-left {
  float: left;
}
.page-vs-index .download .col-50 .ykh-block .ykh-left .ykh-name {
  font-size: 15px;
  color: #ffffff;
  text-shadow: 2px 2px 2px #000000;
  font-weight: bold;
}
.page-vs-index .download .col-50 .ykh-block .ykh-left .ykh-text {
  margin-top: 5px;
  font-size: 12px;
  color: #b1d1ff;
}
.page-vs-index .download .col-50 .ykh-block img {
  float: right;
}
.page-vs-index .download .left {
  border-right: 1px solid #000000;
  float: left;
}
.page-vs-index .download .right {
  float: right;
}
.page-vs-index .download .row {
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
}
.page-vs-index .download .row > .col-50 {
  padding: 20px 10px;
}
.page-vs-index .tc-ad-block {
  margin: 12px 0 0 0;
  font-size: 0;
}
.page-vs-index .buttons-row {
  margin: 0 10px;
}
.foot-logo{
  background: url("../assets/logo.png");
  background-size: cover;
  width: 100%;
  background-repeat:no-repeat;
  background-position: center 0;
  background-position: 50% 50%;
  -webkit-background-size:100%;
  padding-top: 45%;
}
</style>
