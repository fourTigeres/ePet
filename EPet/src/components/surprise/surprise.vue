<template>
  <div class="surprise" ref="surprise">
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


</style>

