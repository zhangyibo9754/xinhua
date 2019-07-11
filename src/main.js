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
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入axios，并加到原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;
//axios的依赖
import QS from 'qs'
//vant引入-cs

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.prototype.qs = QS;
//引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
Vue.use(Vant);

import  {Icon} from 'vant';
Vue.use(Icon)
=======
<<<<<<< HEAD
=======
Vue.use(Vant);

import Vant from 'vant';
import 'vant/lib/index.css';
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d

Vue.use(Vant);

import Vant from 'vant';
import '../node_modules/vant/lib/index.css';

import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
>>>>>>> 6c245f1274868d18239ae13ab311ce25136036a6

import { Icon } from 'vant';

Vue.use(Icon);
Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
<<<<<<< HEAD
Vue.use(Vant);
=======

>>>>>>> 56aa9a37d9ebd96da8146eb39e0c5e07782ff533
Vue.use(vuex);

//使用300ms模块
fastClick.attach(document.body);
/* eslint-disable no-new */
<<<<<<< HEAD
=======
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
>>>>>>> 6c245f1274868d18239ae13ab311ce25136036a6


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
