import Vue from 'vue'
import Router from 'vue-router'
import XhIndex from "../pages/XhIndex"
import XhMessage from '../pages/XhMessage'
import XhMessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'


Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
    }
  ]
})
