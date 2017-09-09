<template>
  <div id="brand">
    <div class="theme">
      <div class="brand">
        <img src="./brand.png" alt="">
      </div>
    </div>
    <div class="onePx"></div>
    <div class="cheapGoods">
      <ul>
        <li  v-if="brandData.brand" v-for="item in brandData.brand[0].list">
          <div class="goodsName">
            <span>{{item.name}}</span>
          </div>
          <div class="picture">
            <a href=""><img :src="`${item.logo}`" alt=""></a>
          </div>
        </li>

      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      brandData:Object
    },
    data () {
      return {}
    },
    methods: {},
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "../../common/stylus/mixin.styl"
  #brand
    display inline-block
    .theme
      box-sizing border-box
      padding-top (10/r)
      padding-left (90/r)
      font-size 0
      width 100%
      height (63/r)
      .brand
        &>img
          width (187/r)
          height (53/r)


    .onePx
      border-1px(rgba(0,0,0,.2))
    .cheapGoods
      height (199/r)
      .goodsName
        box-sizing border-box
        padding (10/r)
        height (44/r)
        span
          line-height (24/r)
      .picture
        font-size 0
        a
          display inline-block
          &>img
            width 100%
</style>
