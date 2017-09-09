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
    <router-view :indexdata="indexpage"></router-view>
    <rightSide></rightSide>
  </div>
</template>

<script>
  import axios from 'axios'
  import rightSide from './components/rightSide/rightSide.vue'
  export default {
    name: 'app',
    components: {
      'rightSide': rightSide
    },
    data () {
      return {
        indexpage: { },
        crazyEverydayData:{ }
      }
    },
    created () {
      const titleArr = ['firstPage', 'catfood', 'special', 'can', 'chaopinVideo', 'classroom']
      axios.get('/api1/indexpage')   //获取indexpage数据
        .then((res) => {
          this.indexpage = res.data.indexData.indexpage
        })


//            配置文件中：
//          import data from './data.json'
//          Mock.mock('/api1/indexpage', {code: 0, indexData: data})
//          res.data得到的是{code: 0, indexData: data}对象，
//          res.data.indexData才是得到的json数据


      axios.get('/api1/everyData')
        .then((res) => {
          this.crazyEverydayData = res.data.everydayData
        })
    },
    computed: {

    },
    methods: {
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "./common/stylus/mixin.styl"    //导入外部样式
  #app
    height 100%
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
