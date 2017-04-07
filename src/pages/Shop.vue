<template>
  <div class="page-content">
    <Headerbar
      v-bind:has-back-link="false"
      title="积分商城">
    </Headerbar>
    <div class="mall-index">
      <div class="shop-tip-text">积分商城的宝贝先到先得，发完即止。</div>
      <div class="my-tab-block">
        <div class="my-tab">
          <div class="tab-content-block">
            <router-link :to="{ path: 'detail', query: { id: item.id }}" :key="item.id" class='commodity shop-link' v-for="item in itemList">
              <img :src='item.productPic' width="100%">
              <div class="bottom-text-block">
                <div class="title">{{item.productName}}</div>
                <div class="bottom-text">
                  <span v-if="item.productPrice" class="jifen">
                    {{item.productPrice}}<small>积分</small>
                    <div class="num">剩余：{{item.productNum}}</div>
                  </span>
                  <span v-else class="jifen">
                    <div style="font-weight: bold;">最高积分者得</div>
                    <div style="font-size: 9px;">(且超过3.5万积分)</div>
                  </span>
                  <router-link :to="{ path: 'detail', query: { id: item.id }}" class="my-btn button">兑换</router-link>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Toolbar></Toolbar>
  </div>
</template>

<script>
import Headerbar from '../components/Headerbar'
import Toolbar from '../components/Toolbar'
import axios from 'axios'
import jsonp from 'jsonp'
import config from '../../config'

export default {
  name: 'shop',
  components: {
      Headerbar,
      Toolbar
  },
  data () {
    return {
      itemList: []
    }
  },
  created() {
    axios.get('/api/userCenter/queryProductList.json', {
        params: {
          appKey: 'cairenhuiweixin',
          timestamp: new Date().getTime()
        }
      })
      .then((response) => {
        let data = response.data;
        console.log(data)
        if (data.errorNo !== '0') {
          this.$Modal.info({title: '系统提示', content: data.errorInfo});
          return;
        }
        let list = data.data;
        list.forEach((item) => item.productPic = config.backendAddr + item.productPic + '-300x300.png');
        this.itemList = list;
      })
      .catch(function (error) {
        this.$Modal.info({title: '系统提示', content: error});
      });

    // 测试jsonp
    // jsonp('http://apitest.china-invs.cn/html/mask/finalList_1000000.txt');
    // window.finalList = function(data) {
    //   console.log(data);
    // }
  }
}
</script>

<style lang="scss" scoped>
.mall-index {
  .swiper-container {
    margin-bottom: -5px;
    .swiper-pagination-bullet {
      background-color: #eeece5;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #c9c9c9;
    }
  }
  .title-block {
    background-color: #fff;
    text-align: center;
    height: 88px;
    line-height: 88px;
    .title {
      font-size: 50px;
      color: #172434;
    }
    small {
      font-size: 10px;
      color: #fff;
      padding: 2px;
      background-color: #e95757;
      border-radius: 4px;
    }
    .login-block {
      line-height: 1;
      padding: 10px;
      color: #AFB1B9;
      >img {
        width: 20%;
      }
    }
  }
  .my-content {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    border-top: 1px solid #f3f3f3;
    .col {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;
      margin: 10px 0;
      .icon-lottery {
        font-size: 32px;
        margin-right: 6px;
      }
      .text {
        width: 30px;
        color: #333;
        line-height: 1;
      }
      &+.col {
        border-left: 1px solid #f6f6f6;
      }
    }
  }
  .shop-tip-text {
    text-align: center;
    color: #999;
    margin-top: 15px;
  }
  .my-tab-block {
    margin: 12px;
    .tab-link {
      color: #e95757;
      background-color: #fff;
      border-color: #e95757;
      &.active {
        background-color: #e95757;
        color: #fff;
      }
    }
    .my-tab {
      .tab-content-block {
        display: flex;
        margin-left: -14px;
        flex-wrap: wrap;
        .commodity {
          width: 50%;
          box-sizing: border-box;
          padding-left: 14px;
          margin-bottom: 12px;
          font-size: 0;
          .title {
            font-size: 12px;
            background-color: #fff;
            color: #333;
            height: 32px;
          }
          .bottom-text-block {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
            padding: 0 4px;
            .bottom-text {
              font-size: 12px;
              padding-bottom: 6px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              .jifen {
                color: #e95757;
                font-size: 12px;
                white-space: nowrap;
                small {
                  color: #333;
                }
                .num {
                  font-size: 12px;
                  color: #333;
                }
              }
              .my-btn {
                background-color: #FE484A;
                color: #fff;
                border: 1px solid #FE484A;
                width: 62px;
                height: 32px;
                line-height: 32px;
                font-size: 14px;
                font-weight: bold;
                overflow: inherit;
                border-radius: 5px;
                text-align: center;
              }
            }
          }
        }
      }
    }
  }
}
</style>
