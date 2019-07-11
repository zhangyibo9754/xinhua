import Vue from 'vue'
import Router from 'vue-router'
import XhMessage from '../pages/XhMessage'
import XhmessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/XhMessage',
      name: 'XhMessage',
      component: XhMessage
    },
    {
      path: '/XhmessagePages',
      name: 'XhmessagePages',
      component: XhmessagePages
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
