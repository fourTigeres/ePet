<template>
  <div id="detail">
    <div class="menuWrapper" ref="menuWrapper">
      <ul>
        <li :class="{selected:selIndex==index}"  v-if="sortsData" v-for="(item,index) in sortsData" @click="selecteItem(index)">
          {{item.name}}
        </li>
      </ul>
    </div>

    <div class="rightWrapper" ref="rightWrapper">
      <div class="scrollErea">
        <div class="scrollItem" v-show="sortDetail.cate_list" v-if="sortDetail.cate_list"  v-for="(item,index) in sortDetail.cate_list">
          <div class="hot-recom">
            <div class="theme"><a href="">{{item.title}}</a></div>
            <div class="all-goods"><a href="">全部商品</a></div>
          </div>
          <ul>

            <!--
每个使用v-for使用的DOM节点，都有一个index值与自己绑定在一起，可以直接从dom身上拿来使用。-->
            <li class="fl mt10" v-for="detail in item.list">
              <a href="" class="db">
                <div class="rela loadimg-nofixed">
                  <img class="w100 image" :src="''+detail.photo" lazy="loaded">
                </div>
                <p class="ftc ft12 mt10 c333">{{detail.name}}</p>
              </a>
            </li>
          </ul>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    props: {
      sortsData: Array
    },
    data () {
      return {
        selIndex: 0,
//        Mock.mock('/api2/recommend', {code: 0, recommend: recommend})
//      Mock.mock('/api2/mainFoods', {code: 0, mainFoods: mainFoods})
//      Mock.mock('/api2/snacks', {code: 0, snacks: snacks})
//      Mock.mock('/api2/dailyUse', {code: 0, dailyUse: dailyUse})
        sortArr: ['recommend', 'mainFoods', 'snacks', 'dailyUse'],
        sortDetail:{}
      }
    },
    created () {
      axios.get(`/api2/recommend`)
        .then((res) => {
          this.sortDetail = res.data.recommend
        })
      setTimeout(() => {
        this._initScroll()
      }, 200)
    },
    methods: {
      _initScroll () {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
//          scrollX:true
        })
//        console.log(this.$refs.menuWrapper)
      },
      selecteItem (index) {
        this.sortDetail = {}
        this.selIndex = index
        const sel = this.sortArr[index]
        axios.get(`/api2/${this.sortArr[index]}`)
          .then((res) => {
            this.sortDetail = res.data[sel]
            console.log(index,this.sortDetail)
          })
      }
    },
    computed: {}

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //引入stylus样式的固定写法
@import "../../common/stylus/mixin.styl"
  #detail
    padding-top (40/r)
    padding-bottom (55/r)
    box-sizing border-box
    overflow hidden
    font-size (14/r)
    width 100%
    height 100%
  .menuWrapper
    height (620/r)
    float left
    width (70/r)
    ul
      display inline-block
      &>.selected
        color red
      li
        font-size (14/r)
        box-sizing border-box
        text-align center
        padding (15/r) 0
        width (70/r)
        height (50/r)
  .rightWrapper
    box-sizing border-box
    display inline-block
    height (667/r)
    width (305/r)
    padding-left (5/r)
    padding-bottom (55/r)
    .scrollErea
      width 100%
      display inline-block
      .scrollItem
        width 100%
        display inline-block
        margin-bottom (20/r)
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
