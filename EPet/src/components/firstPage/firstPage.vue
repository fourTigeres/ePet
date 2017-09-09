<template>
  <div id="firstPage" ref="firstPage">
      <div class="content" ref="content">
        <!--轮播组件-->
        <turnShow :imgArr="imgArr"></turnShow>
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
          <div class="surpriseList" ref="surpriseList">
            <ul>
              <li class="good" v-if="crazyEverydayData.data" v-for="item in crazyEverydayData.data.seven.goods">
                <div class="image">
                  <img :src="`${item.image.image}`" alt="">
                </div>
                <div class="price">￥{{item.sale_price}}</div>
                <div class="cheapPrice">{{item.little_price}}</div>
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
        <brand :brandData="brandData"></brand>
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
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import turnShow from '../turnShow/turnShow.vue'
  import hot from '../hot/hot.vue'
  import chaopinVideo from '../chaopinVideo/chaopinVideo.vue'
  import experience from '../experience/experience.vue'
  import brand from '../brand/brand.vue'
  import publicBenefit from '../publicBenefit/publicBenefit.vue'
  import ratings from '../ratings/ratings.vue'

  export default {
    props: ['indexdata','crazyEverydayData'],
    data(){
      return {
        imgArr:[],
        brandData:{}
      }
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

      setTimeout(()=>{
        axios.get('/api1/brand')
          .then((res) => {
            this.brandData = res.data.brandData
            console.log(this.brandData);
          })

        this.getImagesArr()
      },200)
      this._initScroll ()
    },
    methods: {
      _initScroll () {
        setTimeout(()=>{
          this.firstScroll = new BScroll(this.$refs.firstPage, {
            click: true
          })
          this.twoScroll = new BScroll(this.$refs.surpriseList, {
            click: true,
            scrollX: true
          })
        },1000)

      },
      getImagesArr(){
        setTimeout(()=>{   //加异步之后this.indexdata才不是undefined，
          console.log(222,this.crazyEverydayData)
          this.imgArr = this.indexdata.datas[0].value
          console.log(11,this.indexdata)
        },1000)
      }
    },
    computed:{
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
  @import "../../common/stylus/mixin.styl"    //导入外部样式
  #firstPage
    box-sizing border-box
    overflow hidden
    height 100%
    padding-top (140/r)
    padding-bottom (55/r)

    .content
      width 100%

      height (4600/r)
      margin-bottom (55/r)
      font-size (14/r)

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
            display inline-block
            height 100%
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
          width 100%
          box-sizing border-box
          padding (5/r)
          height (140/r)
          ul
            float left
            white-space nowrap
            overflow hidden
            height  (130/r)
          .good
            display inline-block
            width (92.5/r)
            height (130/r)
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
