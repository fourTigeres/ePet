<template>
  <div id="hot">
    <div class="hot">
      <a href=""><img src="./hot.jpg" alt=""></a>
    </div>
    <div class="onePx"></div>
    <div class="list">
      <div class="left">
        <a href=""><img src="./xinmiao.png" alt=""></a>
      </div>
      <div class="right">
        <a href="" class=""><img src="./guantou.jpg" alt=""></a>
        <a href=""><img src="./tuangou.jpg" alt=""></a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {},
    data () {
      return {}
    },
    methods: {},
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
  @import "../../common/stylus/mixin.styl"
  #hot
    .hot
      font-size 0
      width 100%
      height (40/r)
      a
        display block
        img
          width 100%

    .onePx
      border-1px(rgba(0,0,0,.2))
    .list
      overflow hidden
      &>div
        float left
        font-size 0
      .left
        width 43%
        height (189/r)
        background pink
        img
          width 100%
      .right
        width 57%
        height (189/r)
        a
          display inline-block
          img
            width 100%

</style>
