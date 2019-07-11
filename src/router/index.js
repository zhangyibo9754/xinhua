import Vue from 'vue'
import Router from 'vue-router'
import XhBannerPages from '../pages/XhBannerPages'
import XhCashierDesk from '../pages/XhCashierDesk'
import XhFirmOrder from '../pages/XhFirmOrder'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/XhBannerPages",
      name:"XhBannerPages",
      component:XhBannerPages
    },
    {
      path:"/XhFirmOrder",
      name:"XhFirmOrder",
      component:XhFirmOrder
    },
    {
      path:"/XhCashierDesk",
      name:"XhCashierDesk",
      component:XhCashierDesk
    }


  ]
})
