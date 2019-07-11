import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import XhIndex from "../pages/XhIndex"
=======
import XhMessage from '../pages/XhMessage'
import XhmessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'
>>>>>>> 2a62364c02774602004039fff4b643af6e8b90f8

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
<<<<<<< HEAD
      path: '/',
      name: 'XhIndex',
      component: XhIndex
    },

=======
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
>>>>>>> 2a62364c02774602004039fff4b643af6e8b90f8
  ]
})
