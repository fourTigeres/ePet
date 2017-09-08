<template>
  <div id="home">
    <div id="header">
      <a href="http://baidu.com">
        <img class="hongbao" src=./hongbao.png alt="">
      </a>
      <div class="main">
        <div class="epetSearch ">
          <div class="petStation">
            <a class="animate" href="">
              <span class="catordog c89">猫猫站</span>
            </a>|
          <a class="adress" href="">
            <span class="myposition c89 ft13">重庆</span>
            <span >
            <img class="sanjiao" src="./daosnajiao.png" alt="">
          </span>
          </a>
          </div>
          <div class="searchPet">
            <a href="https://wap.epet.com/search.html?pet_type=cat&amp;fw=0">
              <input class="input" type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <div class="eico serach-ico">
              </div>
            </a>
          </div>
          <div class="paopao">
            <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
            </a>
          </div>
        </div>
        <div class="findNav">
          <ul>
            <li class="">
              <router-link to="firstPage">
                <span>首页</span>
                <div></div>
              </router-link>
            </li>
            <li>
              <router-link to="catfood">
                <span>猫粮</span>
              </router-link>
            </li>
            <li>
              <router-link to="special">
                <span>特卖</span>
              </router-link>
            </li>
            <li>
              <router-link to="can">
                <span>罐头超市</span>
              </router-link>
            </li>
            <li>
              <router-link to="chaopinVideo">
                <span>潮品视频</span>
              </router-link>
            </li>
            <li>
              <router-link to="classroom">
                <span>新喵课堂</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
  import firstPage from '../firstPage/firstPage.vue'
  import catfood from '../catfood/catfood.vue'
  import special from '../special/special.vue'
  import can from '../can/can.vue'
  import chaopinVideo from '../chaopinVideo/chaopinVideo.vue'
  import classroom from '../classroom/classroom.vue'



  export default {
    props: {},
    data () {
      return { }
    },
    methods: {},
    computed: {},
    components:{
      'firstPage': firstPage,
      'catfood': catfood,
      'special': special,
      'can': can,
      'chaopinVideo': chaopinVideo,
      'classroom': classroom,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
  @import "../../common/stylus/mixin.styl"    //导入外部样式
  #home
    width 100%
    display inline-block
    #header
      width 100%
      position fixed
      z-index 1
      top 0
      background white
      &>a
        display block
        width 100%
        .hongbao
          width 100%
      .main
        width 100%
        box-sizing border-box
        font-size (14/r)
        overflow hidden
        .epetSearch
          box-sizing border-box
          padding (5/r) (10/r)
          overflow hidden
          width 100%

          &>div
            float left
            text-align center
            /*a*/
              /*display inline-block*/
          .petStation
            /*background pink*/
            padding (6/r) 0
            width (115/r)
            height (25/r)
            margin-right (5/r)
            a
              display inline-block
            .animate
              margin-right (5/r)
            .adress
              width (38/r)
              height (17/r)
              margin 0 (8/r)
              span
                .sanjiao
                  vertical-align middle
                  width (5/r)
                  height (5/r)
          .searchPet
            padding (4/r) 0
            width (200/r)
            height (25/r)
            .serach-ico
              margin-left (-20/r)
              background url("./search.png")
              background-size 100% 100%
              display inline-block
              width (11/r)
              height  (11/r)
              img
                width (11/r)
                height  (11/r)
          .paopao
            margin-left (5/r)
            background url("./mydope.png")
            background-size 100% 100%
            width (25/r)
            height (25/r)


        .findNav
          .active
            footer-run(pink)
          ul
            overflow hidden
            width (447/r)
            height (36/r)
            li
              float left
              box-sizing border-box
              text-align center
              width (74.5/r)
              height (36/r)
              padding (8/r) 0


</style>
