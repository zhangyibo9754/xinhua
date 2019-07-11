import Vue from 'vue'
import Router from 'vue-router'
import XhIndex from "../pages/XhIndex"
import XhMessage from '../pages/XhMessage'
import XhMessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'

<<<<<<< HEAD
// 引入页面组件
import XhClassify from '.././pages/XhClassify'

Vue.use(Router)
=======
>>>>>>> d591c469fcfc898425834267c69a84e461229ad6

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path:'/XhClassify',
      name:'XhClassify',
      component: XhClassify
=======
      path: '/',
      name: 'XhIndex',
      component: XhIndex
    },
    {
      path: '/XhMessage',
      name: 'XhMessage',
      component: XhMessage
    },
    {
      path: '/XhMessagePages',
      name: 'XhMessagePages',
      component: XhMessagePages
    },
    {
      path: '/XhGiftCards',
      name: 'XhGiftCards',
      component: XhGiftCards
    },
    {
      path:'/XhMyStudy',
      name:'XhMyStudy',
      component:XhMyStudy
>>>>>>> d591c469fcfc898425834267c69a84e461229ad6
    }
  ]
})
