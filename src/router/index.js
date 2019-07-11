import Vue from 'vue'
import Router from 'vue-router'

// 引入页面组件
import XhProductDetail from '.././pages/XhProductDetail'
import XhProductsList from '.././pages/XhProductsList'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/XhProductDetail',
      name:'XhProductDetail',
      component: XhProductDetail
    },
    {
      path:'/XhProductsList',
      name:'XhProductsList',
      component: XhProductsList
    }
  ]
})
