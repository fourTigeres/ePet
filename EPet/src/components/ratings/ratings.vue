<template>
  <div id="ratings">
    <div class="theme">
      <div class="title">
        <img src="./title.png" alt="">
      </div>
      <div class="more">
        <a href="">
          <span>好评率90.64%</span>
        </a>
      </div>
    </div>
    <div class="ratings">
      <ul>
        <li class="fl" v-for="n in 5">
          <a href="">
            <div class="rating mt10 ml10 bgf5 pb15">
              <div class="main_img rela">
                  <img class="image" src="./rating.jpg" lazy="loaded">
                <div class="ell cfff ftc ft12 join_time"><span>加入E宠2年1月</span></div>
              </div>
              <div class="mt5 clearfix ft12 pr5 pl5">
                <span class="fl">红*****ω</span>
                <span class="fr pet-name">中华田园猫</span>
              </div>
              <div class="mt5 ft13 pr5 pl5 c999 font-intro">
              包装完美，没有破漏的情况存在，虽说是跨境运输，但是物流的速度还是比想象中快，最主要的还是正品保证，买得放心吃的安心
              </div>
            </div>
          </a>
        </li>



      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: {},
    data () {
      return { }
    },
    methods: {},
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "../../common/stylus/mixin.styl"
  #ratings
    .theme
      box-sizing border-box
      padding-left (90/r)
      width 100%
      height (45/r)
      overflow hidden
      .title
        font-size 0
        float left
        height 100%
        &>img
          height 100%
      .more
        float right
        box-sizing border-box
        width 33%
        height 100%
        a
         display block
         padding-top (17/r)
         height  100%
    .ratings
      box-sizing border-box
      display inline-block
      padding-right 10px
      width 100%
      ul
        width 100%
        li
          float left
          width 50%
          a
            display inline-block
            .rating
              box-sizing border-box
              background rgb(245,245,245)
              width 100%
              height 264px
              padding 10px 0 15px 10px
              .main_img
                position relative
                overflow hidden
                width 100%
                height 150px
                img
                  width 100%
                .join_time
                  position absolute
                  width 100%
                  bottom 0
                  text-align center
                  color white

              .clearfix
                margin-top 5px
                padding 0 5px
                &>span
                  display inline-block
                .f1
                  float left
                .fr
                  float right
                  color black
                  background rgb(221,221,221)
                  padding 2px
                  border-radius 2px
              .font-intro
                box-sizing border-box
                font-size 13px
                margin-top 5px
                padding 0 5px
                height 60px
                width 100%
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                line-height 20px
                text-size-adjust:100%













</style>
