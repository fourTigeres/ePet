// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import app from './App'
import  './common/stylus/index.styl'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem, Button} from 'mint-ui';
import 'mint-ui/lib/style.css'
import BScroll from 'better-scroll'
// Vue.use(MintUI)

// Vue.filter("time-string",(value) => {
//   return moment(value).format('YYYY-MM-DD HH:mm:ss')
// })


//使用方法Vue.component(tagName, options)注册全局组件
Vue.component(Swipe.name, Swipe);      //注册后全局就可以使用<mt-swipe></mt-swipe>标签
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

// Vue.component(SwipeItem.name, SwipeItem);
//components: {
// 'mt-swipe': Swipe,   //等于Vue.component(Swipe.name, Swipe);
//   'mt-swipe-item': SwipeItem   //等于Vue.component(SwipeItem.name, SwipeItem);
// },
new Vue({
  el: '#app',
  render: h=> h(app),
  router
})
