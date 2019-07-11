import Vue from 'vue'
import Router from 'vue-router'

// 引入页面组件
import XhClassify from '.././pages/XhClassify'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/XhClassify',
      name:'XhClassify',
      component: XhClassify
    }
  ]
})
