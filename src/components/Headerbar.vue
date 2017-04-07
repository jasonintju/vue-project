<template>
  <header>
    <span class="left" v-bind:class='{"hidden": !hasBackLink}' v-on:click="back"><Icon type="chevron-left"></Icon> 返回</span>
    <span class="center">{{title}}</span>
    <span class="right">{{setting}}</span>
  </header>
</template>

<script>
import router from './../router'
export default {
  name: 'headerbar',
  props: ['hasBackLink', 'title', 'setting'],
  data () {
    return {
    }
  },
  methods: {
    back: function() {
      router.go(-1)
      // this.$emit('backEvent')
    }
  }
}
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: #fff;
    background-color: #e95757;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    display: flex;
    > span {
      &.left {
        padding-left: 15px;
        flex-basis: 20%;
      }
      &.right {
        text-align: right;
        padding-right: 15px;
        flex-basis: 20%;
      }
      &.center {
        text-align: center;
        flex-basis: 60%;
      }
      &.hidden {
        display: none;
        +span {
          flex-basis: 100%;
          +span {
            flex-basis: 20%;
            margin-left: -20%;
          }
        }
      }
    }
  }
</style>
