<template>
  <div id="sorts">
    <div class="title">
      <div class="sort ">
        <router-link to="detail">分类</router-link>
      </div>
      <div class="brand">
        <router-link to="brand">品牌</router-link>
      </div>
    </div>
    <router-view :sortsData="sortsData"></router-view>
  </div>
</template>

<script>

  import detail from '../detail/detail.vue'
  import axios from 'axios'
  import brand from '../brand/brand.vue'
  export default {
    props: {},
    data () {
      return {
        sortsData:[]
      }
    },
    methods: {},
    created(){
      axios.get('/api2/sortsData')
        .then((res) => {
          this.sortsData = res.data.sortsData.categorys
//          console.log(555,this.sortsData)
//          console.log(typeof this.sortsData)
        })
    },
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "../../common/stylus/mixin.styl"
  #sorts
    .title
      position fixed
      background white
      top 0
      font-size (16/r)
      box-sizing border-box
      padding 0 (15/r)
      height (40/r)
      width 100%
      &>div
        float left
        height 100%
        padding-top (10/r)
        width 50%
        box-sizing border-box
        .active
          footer-run(red)
        a
          display inline-block
          height 100%
      .sort
        padding-left 30%
      .brand
        padding-right 30%







</style>
