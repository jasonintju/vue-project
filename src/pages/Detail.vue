<template>
  <div class='shop-detail'>
    <Headerbar
      v-bind:has-back-link='true'
      title="商品详情">
    </Headerbar>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src='details.productPic' width="100%" alt=""></div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class="my-title-block">
      <span v-if="details.productCost">价值：{{details.productCost}}元</span>
      <span v-else>最高积分者得</span>
      <span>剩余：{{details.productNum}}</span>
    </div>
    <div class="detail-block">
      <div class="name">{{details.productName}}</div>
      <div class="detail-text" v-html="details.productDescription"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../../config'
import Headerbar from '../components/Headerbar'

export default {
  name: 'detail',
  data () {
    return {
      details: {}
    }
  },
  components: {
    Headerbar
  },
  created() {
    let id = this.$route.query.id;
    console.log(id)
    axios.get('/api/userCenter/queryProduct.json', {
        params: {
          appKey: 'cairenhuiweixin',
          timestamp: new Date().getTime(),
          productId: id
        }
      })
      .then((response) => {
        let data = response.data.data;
        data.productPic = config.backendAddr + data.productPic + '-1080x758.png';
        this.details = data;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.shop-detail {
  padding-top: 44px;
  &.noOpen {
    padding-bottom: 100px;
  }
  .swiper-container {
    .swiper-slide {
      margin-bottom: -4px;
    }
    .swiper-pagination-bullet {
      background-color: #eeece5;
      opacity: 1;
    }
    .swiper-pagination-bullet-active {
      background: #c9c9c9;
    }
  }
  .my-title-block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
    background: #fff;
    font-size: 15px;
    color: #333;
  }
  .detail-block {
    padding: 12px;
    background-color: #efeff4;
    .name {
      font-size: 14px;
      margin: 6px 0;
    }
    .detail-text {
      font-size: 12px;
      color: #888;
    }
  }
}
</style>
