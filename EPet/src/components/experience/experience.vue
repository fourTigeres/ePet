<template>
  <div id="experience">
    <div class="theme">
      <div class="experience">
        <img src="./experience.png" alt="">
      </div>
      <div class="more">
        <a href=""><img src="./more.png" alt=""></a>
      </div>
    </div>
    <div class="shopCenter">
      <a href=""><img src="./shopCenter.jpg" alt=""></a>
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
  #experience
    .theme
      box-sizing border-box
      padding-top (10/r)
      padding-left (90/r)
      font-size 0
      width (375/r)
      height (63/r)
      overflow hidden
      .experience
        float left
        &>img
          width (187/r)
          height (53/r)
      .more
        float right
        width (90/r)
        height 100%
        a
          display inline-block
          width ()
          img
            height  (53/r)
    .shopCenter
      font-size 0
      height (155/r)
      &>a
        display inline-block
        &>img
          width 100%

</style>
