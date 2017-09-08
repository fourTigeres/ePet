import Vue from 'vue'
import Router from 'vue-router'


import home from '../components/home/home.vue'
import catfood from '../components/catfood/catfood.vue'
import special from '../components/special/special.vue'
import can from '../components/can/can.vue'
import chaopinVideo from '../components/chaopinVideo/chaopinVideo.vue'
import firstPage from '../components/firstPage/firstPage.vue'
import classroom from '../components/classroom/classroom.vue'



import sorts from '../components/sorts/sorts.vue'
import shopCart from '../components/shopCart/shopCart.vue'
import myEPet from '../components/myEPet/myEPet.vue'
import detail from '../components/detail/detail.vue'
import brand from '../components/brand/brand.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',   // 样式要使用在a标签的下一层，
  mode: 'history', // 去掉#
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/',
          redirect: 'firstPage'
        },
        {
          path: 'firstPage',
          component: firstPage
        },
        {
          path: 'catfood',
          component: catfood
        },
        {
          path: 'special',
          component: special
        },
        {
          path: 'can',
          component: can
        },
        {
          path: 'chaopinVideo',
          component: chaopinVideo
        },
        {
          path: 'classroom',
          component: classroom
        }

      ]
    },
    {
      path: '/sorts',
      name: 'sorts',
      component: sorts,
      children: [
        {
          path: '/',
          redirect: 'detail'
        },
        {
          path: 'detail',
          component: detail
        },
        {
          path: 'brand',
          component: brand
        },
      ]
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },
    {
      path: '/myEPet',
      name: 'myEPet',
      component: myEPet
    },
    {
      path: '/',
      redirect:'/home'
    }
  ]
})
