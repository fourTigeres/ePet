<template>
  <div id="chaopinVideo">
    <div class="theme">
      <div class="chaopin">
        <img src="./chaopin.png" alt="">
      </div>
      <div class="more" href="">
        <a href=""><img src="./more.png" alt=""></a>
      </div>
    </div>
    <div class="video">
      <div class="logo">
        <div class="videoLogo"></div>
        <div class="time">
          <span>01</span>:
          <span>34</span>
        </div>
      </div>
      <video src=""></video>
    </div>
    <div class="info">
      <div class="title">
        <a href="">把太阳射下来</a>
      </div>
      <div class="count">
        <a href="">5573</a>
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
  #chaopinVideo
    .theme
      box-sizing border-box
      padding-left (90/r)
      font-size 0
      width (375/r)
      height (53/r)
      overflow hidden
      .chaopin
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
    .video
      position relative
      width 100%
      height (211/r)
      .logo
        position absolute
        width 100%
        height (19/r)
        top 0
        .videoLogo
          float left
          width 75%
          height 100%
          background greenyellow
        .time
          float right
          text-align center
          width 15%
          height 100%
          span
            display inline-block



      video
        width 100%
        height 100%
    .info
      box-sizing border-box
      padding (10/r)
      overflow hidden
      width 100%
      height (39/r)
      .title
        float left
      .count
        float: right
</style>
