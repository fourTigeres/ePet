<template>
  <div id="app">
    <div class="tab">
      <div class="tab-item index">
        <router-link to="/home">
          <img src="./components/footer/main_cattab_1_sel.png" alt="">
        </router-link>
      </div>
      <div class="tab-item sorts">
        <router-link to="/sorts">
          <img src="./components/footer/main_tab_2.png" alt="">
        </router-link>
      </div>
      <div class="tab-item shopCart">
        <router-link to="/shopCart">
          <img src="./components/footer/main_tab_3.png" alt="">
        </router-link>
      </div>
      <div class="tab-item ePet">
          <router-link to="/myEPet">
            <img src="./components/footer/main_tab_4.png" alt="">
          </router-link>
      </div>
    </div>
    <router-view></router-view>
    <rightSide></rightSide>
  </div>
</template>

<script>
  import rightSide from './components/rightSide/rightSide.vue'
export default {
    name: 'app',
    components: {
      'rightSide': rightSide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "./common/stylus/mixin.styl"    //导入外部样式
.tab
  position fixed
  z-index 10
  display flex
  left 0
  bottom 0
  width (375/r)
  height (55/r)
  &>.tab-item
    background white
    flex 1
    text-align center
    .active
      background  rgba(0,0,0,0.4)
    & > a      //&表示父级
      display inline-block    //让链接与外层同宽
      img
        height (55/r)

</style>
