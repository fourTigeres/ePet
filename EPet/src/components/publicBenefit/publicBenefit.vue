<template>
  <div id="publicBenefit">
    <div class="theme">
      <div class="publicBenefit">
        <img src="./benefit.jpg" alt="">
      </div>
      <div class="more">
        <a href=""><img src="./know.png" alt=""></a>
      </div>
    </div>
    <div class="benefit">
      <img src="./publicBenefit.jpg" alt="">
      <div class="sum tafloat">
        <p class="mt5">截止今日，TA公益已联合E宠商城和<span class="bgfff cred round5 pl5 pr5 mr5 ml5">13</span>家品牌</p>
        <p class="mt5">累积捐赠<span class="cred">956,839.49</span>元</p>
        <p class="mt5">已合作<span class="ml5 mr5">7</span>家公益组织，举办参与
          <span class="bgfff cred round5 pl5 pr5 mr5 ml5">2</span>场公益活动,助养
          <span class="bgfff cred round5 pl5 pr5 mr5 ml5">34</span>位领养人
        </p>
      </div>
    </div>
    <div class="donation">
      <div class="left">
        <span><img src="./zanzhu.png" alt=""></span>
      </div>
      <div class="right">
        <ul>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
          <li>
            <div class="swiper-slide swiper-slide-active">
              <a href="javascript:;">
                <div class="db loadimg-fixed">
                  <img src="./epet_brand_logo.png" lazy="loaded">
                </div>
                <span class="ft12 help-money ell">已捐助¥239236.85</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
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
  #publicBenefit
    .theme
      box-sizing border-box
      padding-left (90/r)
      font-size 0
      width 100%
      height (45/r)
      overflow hidden
      .publicBenefit
        float left
        &>img
          width (187/r)
          height (45/r)
      .more
        float right
        box-sizing border-box
        padding-top (17/r)
        width 33%
        height 100%
        a
          display inline-block
          img
            height  (11/r)

    .benefit
      position relative
      display inline-block
      img
        width 100%
      .sum
        position absolute
        bottom (10/r)
        height (103/r)
        text-align center
        font-size (14/r)
        color white
        .mt5
          line-height (23/r)
          span
            display inline-block
            margin 0 (5/r)
            padding (2/r)
            border-radius (2/r)
            background white
            color red



    .donation
      width 100%
      box-sizing border-box
      padding-left (10/r)
      height (76/r)
      &>div
        float left
      .left
        box-sizing border-box
        padding-top (10/r)
        padding-right (10/r)
        width 18%
        height 100%
        span
          font-size 0
          display inline-block
          img
            height 100%
            width 100%
      .right
        box-sizing border-box
        padding (5/r)
        width 82%
        height 100%
        overflow hidden
        ul
          width (1120/r)
          overflow hidden
          li
            display inline-block
            float left
            box-sizing border-box
            padding-right (10/r)
            width (112/r)
            height (71/r)
            font-size (12/r)
            .swiper-slide
              width (102/r)
              a
                display block
                .db
                  width 100%
                  &>img
                    width (92/r)
                    height (40/r)
                .help-money
                  display inline-block
                  width 100%
                  text-overflow ellipsis
                  overflow hidden
                  white-space nowrap


</style>
