// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 自适应
import './assets/js/flexble'
// 路由就是根据网址的不同，返回不同的内容
import router from './router'
import vuex from "vuex"
import store from "./store/index"
//300ms点击延迟解决
import fastClick from 'fastclick'
// 引入基础样式重置表
import './assets/css/reset.css'
// 移动端1px边框问题解决
import './assets/css/border.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入swiper样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);
Vue.use(vuex);
//使用300ms模块
fastClick.attach(document.body);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
