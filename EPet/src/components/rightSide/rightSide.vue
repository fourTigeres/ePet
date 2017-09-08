<template>
  <div id="rightSide">
    <div class="wrapper">
      <img src="./gocat.png" alt="">
    </div>
    <div class="changePop bgfff block">
      <div class="cartc-bg db"></div>
      <div class="cartc-box rela overflow" style="overflow: hidden; display: block; top: 98px; left: 0px;">
        <div class="main">
          <p class="ftc c999 ft16 rela">DOG<b class="b-line c000 ft12">▁</b> </p>
          <p class="ftc mt20 ft20 c666">亲爱的小主</p>
          <p class="ftc c333 ft20">您即将进入<span>狗狗站</span></p>
          <ul class="clearfix ftc change-ul">
            <li type="cat" class="fl pet1 cat"><img src="">
              <div class="pet1name">猫猫站</div>
            </li>
            <li type="dog" class="fl pet2 mainpet rela dog"><img src="">
              <div>狗狗站</div>
              <b class="current-line c000 ft12">▁</b>
              <a href="javascript:;" class="cfff ft14 ftc once-into mt15 dib">立即进入</a>
            </li>
            <li type="fish" class="fl pet3 fish"><img src=""><div class="pet3name">水族站</div></li>
          </ul>
        </div>
      </div>
      <div class="close" @click = isShow(false)>
        <a href="javascript:;" class="cartc-close afff ft20 ftc c666">X</a>
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
  #rightSide
    position fixed
    overflow hidden
    z-index 20
    right 0
    bottom (120/r)
    width (41/r)
    height (46/r)
    @keyframes catMove
      0%
        transform translateX(0)
      100%
        transform translateX(-100%)
    .wrapper
      display inline-block
      animation  3s catMove  steps(2) infinite
      img
        display block
        height (46/r)





</style>
