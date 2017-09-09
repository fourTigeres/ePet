<template>
  <div id="turnShow">
      <mt-swipe :auto="1000" class="swiperWrapper">
        <mt-swipe-item class="swipeItem" v-if="imgArr" v-for="item in imgArr">
          <router-link to="/firstPage"><img src="./5.jpg" alt=""></router-link>
        </mt-swipe-item>
        <!--使用 :src="`${item.image}`"-->
      </mt-swipe>
  </div>
</template>

<script>
  export default {

    props: {
      imgArr: Array
    },
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
