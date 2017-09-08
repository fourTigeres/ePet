<template>
  <div id="footer">
    <div class="tab">
      <div class="tab-item">
        <router-link to="/firstPage">
          <img src="./images/footer/main_tab_1_sel.png" alt="">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sorts">
          <img src="./images/footer/main_tab_2.png" alt="">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopCart">
          <img src="./images/footer/main_tab_3.png" alt="">
        </router-link>
      </div>
      <div class="tab-item">
        <router-link to="/myEPat">
          <img src="./images/footer/main_tab_4.png" alt="">
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: {},
    data () {
      return{}
    },
    methods: {},
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "./common/stylus/mixin.styl"    //导入外部样式

.tab
  position fixed
  left 0
  bottom 0
  width (375/r)
  height 55px
  line-height (55/r)
  font-size (55/r)
  .tab-item
    width 25%
    flex 1
    text-align center
    & > a      //&表示父级
      display block    //让链接与外层同宽
    .active
      background  rgb(240,20,20)
</style>
