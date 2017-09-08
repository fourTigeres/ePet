<template>
  <div id="detail">
    <div class="menuWrapper" ref="menuWrapper">
      <ul>
        <li data-id="88888" class="ftc bgfff" v-for="n in 15">为您推荐</li>

        <!--左侧的菜单列表的index与右侧的currentIndex相等时，左侧的样式生效-->
        <!--<li class="menu-item" v-for="(good, index) in goods"-->
            <!--:class="{current:currIndex===index}"-->
            <!--@click="clickMenuItem(index)"-->
        <!--&gt;-->

            <!--<span class="text border-1px">-->
              <!--<span class="icon" v-if="good.type>=0" :class="supportClasses[good.type]"></span>-->
              <!--{{good.name}}-->
            <!--</span>-->
        <!--</li>-->
      </ul>
    </div>

    <div class="rightWrapper" ref="rightWrapper">
      <div class="hot-recom">
        <div class="theme"><a href="">狗狗周边</a></div>
        <div class="all-goods"><a href="">全部商品</a></div>
      </div>
      <ul>
        <li class="fl mt10" v-for="n in 15">
          <a href="" class="db">
            <div class="rela loadimg-nofixed">
              <img class="w100 image" src="./shebei.jpg" lazy="loaded">
            </div>
            <p class="ftc ft12 mt10 c333">智能设备</p>
          </a>
        </li>


        <!--<li class="food-list food-list-hook" v-for="good in goods" >-->
          <!--<h1 class="title">{{good.name}}</h1>-->
          <!--<ul>-->
            <!--<li class="food-item border-1px" v-for="food in good.foods" @click="showFoodDetail(food)">-->
              <!--<div class="icon"><img width="57" height="57" :src="food.icon"></div>-->
              <!--<div class="content">-->
                <!--<h2 class="name">{{food.name}}</h2>-->
                <!--<p class="desc">{{food.description}}</p>-->
                <!--<div class="extra">-->
                  <!--<span class="count">月售{{food.sellCount}}份</span>-->
                  <!--<span>好评率{{food.rating}}%</span>-->
                <!--</div>-->
                <!--<div class="price">-->
                  <!--<span class="now">￥{{food.price}}</span>-->
                  <!--<span class="old" style="display: none;">￥{{food.oldPrice}}</span>-->
                <!--</div>-->
                <!--<div class="cartcontrol-wrapper">-->
                  <!--<cartcontrol :food="food" :update-food-count="updateFoodCount"></cartcontrol>-->
                <!--</div>-->
              <!--</div>-->
            <!--</li>-->
          <!--</ul>-->
        <!--</li>-->
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
@import "../../common/stylus/mixin.styl"
  #detail
    margin-top (40/r)
    overflow hidden
    font-size (14/r)
    width 100%
    display inline-block
  .menuWrapper
    display inline-block
    float left
    width (70/r)
    ul
      display inline-block
      li

        font-size (14/r)
        box-sizing border-box
        text-align center
        padding (15/r) 0
        width (70/r)
        height (50/r)
  .rightWrapper
    display inline-block
    box-sizing border-box
    width (305/r)
    padding-left (5/r)
    .hot-recom
      overflow hidden
      display inline-block
      width (100%)
      padding (15/r)(5/r)(15/r)(5/r)
      .theme
        float left
        box-sizing border-box
        padding (2/r) 0
        width 30%
        height (30/r)
      .all-goods
        float right
        box-sizing border-box
        padding (2/r) 0
        width 30%
        height (30/r)
        &>a
          display inline-block

    ul
      overflow hidden
      width 100%
      display inline-block
      li
        float left
        box-sizing border-box
        padding (10/r)(5/r) 0 (5/r)
        width 33.3%
        a
          text-align center
          width 100%
          display inline-block
          .loadimg-nofixed
            margin-bottom (5/r)
          img
            width 100%
            height  100%
</style>
