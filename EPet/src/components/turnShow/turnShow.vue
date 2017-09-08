<template>
  <div id="turnShow">
    <div>
      <mt-swipe :auto="1000" class="swiperWrapper">
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./1.jpg" alt=""></router-link></mt-swipe-item>
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./2.jpg" alt=""></router-link></mt-swipe-item>
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./3.jpg" alt=""></router-link></mt-swipe-item>
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./4.jpg" alt=""></router-link></mt-swipe-item>
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./5.jpg" alt=""></router-link></mt-swipe-item>
        <mt-swipe-item class="swipeItem"><router-link to="/firstPage"><img src="./6.jpg" alt=""></router-link></mt-swipe-item>
      </mt-swipe>
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
@import "../../common/stylus/mixin.styl"    //导入外部样式
  #turnShow
    display inline-block
    width 100%
    .swiperWrapper
      width 100%
      height (160/r)
      .swipeItem
        &>a>img
          width (375/r)
</style>
