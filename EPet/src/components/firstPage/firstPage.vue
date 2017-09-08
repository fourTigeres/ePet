<template>
  <div>
  <div id="firstPage" ref="firstPage">
      <div class="content" ref="content">
        <!--轮播组件-->
        <turnShow></turnShow>
        <div class="plan">
          <div class="oneBuy">
            <a href="">
              <img src="./one_buy.gif" alt="">
            </a>
          </div>
          <!--可以封装为组件-->
          <div class="hot">
            <ul>
              <li>
                <a href=""><img src="./Echong.png" alt=""></a>
              </li>
              <li>
                <a href=""><img src="./pinpai.png" alt=""></a>
              </li>
              <li>
                <a href=""><img src="./tiyan.png" alt=""></a>
              </li>
              <li>
                <a href=""><img src="./qingcang.png" alt=""></a>
              </li>
              <li>
                <a href=""><img src="./remai.png" alt=""></a>
              </li>

            </ul>
          </div>
        </div>
        <div class="pageLine"></div>
        <!--抢购-->
        <div class="surprise">
          <div class="surpriseTime">
            <div class="crazy"><img src="./suprise.png"></div>
            <div class="remainingTime" style="margin-top: 1px;">
              <span>距本场结束</span>
              <div class="backTime">
                <span class="time1-1">00</span><span class="time-zi ft12">:</span>
                <span class="time1-1">00</span><span class="time-zi ft12">:</span>
                <span class="time1-1">00</span>
                <span style="display: none;">2017-09-5 22:0:0</span>
              </div>
            </div>
            <div class="more">
              <a href="" class="db ftr"></a>
            </div>
          </div>
          <div class="surpriseList">
            <ul>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>
              <li class="good">
                <div class="image">
                  <img src="./three_in_one.jpg" alt="">
                </div>
                <div class="price">￥24.90</div>
                <div class="cheapPrice">省￥10.10</div>
              </li>

            </ul>
          </div>
        </div>
        <div class="pageLine"></div>
        <hot></hot>
        <!--潮品视频-->
        <chaopinVideo></chaopinVideo>
        <div class="pageLine"></div>
        <!--体验馆-->
        <experience></experience>
        <div class="pageLine"></div>
        <!--品牌组件-->
        <brand></brand>
        <div class="pageLine"></div>
        <!--公益组件-->
        <publicBenefit></publicBenefit>
        <div class="pageLine"></div>
        <ratings></ratings>
        <div class="pageLine"></div>
        <div class="wap-footer-bar hide" style="display: block;">
          <div class="footer" style="display: block;">
            <div class="ft">
              <span class="bt" title="触屏版">触屏版</span>
              <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
              <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
              <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
            </div>
            <div class="copyRight" style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">© wap.epet.com 版权：重庆易宠科技有限公司</div>
          </div>
        </div>
      </div>

  </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import turnShow from '../turnShow/turnShow.vue'
  import hot from '../hot/hot.vue'
  import chaopinVideo from '../chaopinVideo/chaopinVideo.vue'
  import experience from '../experience/experience.vue'
  import brand from '../brand/brand.vue'
  import publicBenefit from '../publicBenefit/publicBenefit.vue'
  import ratings from '../ratings/ratings.vue'

  export default {
    props: {},
    data(){
      return { }
    },

    components: {
      'turnShow': turnShow,
      'hot': hot,
      'chaopinVideo': chaopinVideo,
      'experience': experience,
      'brand': brand,
      'publicBenefit': publicBenefit,
      'ratings': ratings
    },
    created () {
//      setTimeout(()=>{
//        if (!this.scroll) { // 如果不存在才创建, 并保存,保证总共只创建一次
//          this.scroll = new BScroll(this.$refs.firstPage, {
//            click: true,
//            scrollX:true
//          });
//          console.log(this.$refs.firstPage)
//        } else {
//          setTimeout(()=>{
//            this.scroll.refresh()    //滚动之后要即时更新到最新位置，否则会回到滚动之前的位置
//          },20)
//        }
//      },20)

    },
    methods: {
    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
  @import "../../common/stylus/mixin.styl"    //导入外部样式
  #firstPage
    margin-bottom 55px
    .content
      font-size (14/r)
      margin-top (140/r)
      .plan
        .oneBuy
          font-size 0
          width 100%
          height (120/r)
          a
            display inline-block
            img
              width 100%
        .hot
          font-size 0
          width 100%
          height (90/r)
          ul
            overflow hidden
          &>ul>li
            float left
            width 20%
            &>a
              display inline-block
              &>img
                width (100%)
      .pageLine
        width 100%
        height (10/r)
        background rgba(200,244,245,.9)
      .surprise
        .surpriseTime
          box-sizing border-box
          height (60/r)
          padding (10/r)
          &>div
            float left
          .crazy
            padding (8/r) 0
            margin-left (-20/r)
            width (105/r)
            height (24/r)
            img
              width 100%
          .remainingTime
            padding (10/r) 0
            .backTime
              display inline-block
              margin 0 (10/r)
              .time1-1
                text-align center
                border (1/r) rgba(0,0,0,0.2) solid
          .more
            float right
            font-size 0
            width  22%
            height (40/r)
            background url("./more.png")
            background-size 90% 100%
            background-position (10/r) (-2/r)
            a
              display block
              width 100%
              height 100%



        .surpriseList
          overflow hidden
          ul

            overflow hidden
            width (1176/r)
          .good
            float left
            width (98/r)
            height (130/r)
            background url("./default-epet.png")
            background-size 100% 100%
            .image
              font-size 0
              img
                width 100%
            .price
              color red
              text-align center
            .cheapPrice
              text-align center

      .wap-footer-bar
        width 100%
        height 86px
        .footer
          height 100%
          .ft
            height 42px
            box-sizing border-box
            padding 15px 0 5px 0
            text-align center
            line-height 24px
            &>span
              display inline-block
              margin 0 10px
            .bt
              color red

          .copyRight
            box-sizing border-box
            width 100%
            height 44px
            padding 0 10px 25px 10px
</style>
