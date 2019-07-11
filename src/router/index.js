import Vue from 'vue'
import Router from 'vue-router'
import XhCashierDesk from '@/pages/XhCashierDesk'
import XhManageAddress from '@/pages/XhManageAddress'
import XhSelectAddress from '@/pages/XhSelectAddress'
import XhCreateAddress from '@/pages/XhCreateAddress'
import XhFirmOrder from '@/pages/XhFirmOrder'
import XhShoppingCart from '@/pages/XhShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
    path: '/XhCashierDesk',
    name: 'XhCashierDesk',
    component: XhCashierDesk
    },
    {
      path: '/XhManageAddress',
      name: 'XhManageAddress',
      component: XhManageAddress
    },
    {
      path: '/XhSelectAddress',
      name: 'XhSelectAddress',
      component: XhSelectAddress
    },
    {
      path: '/XhCreateAddress',
      name: 'XhCreateAddress',
      component: XhCreateAddress
    },
    {
      path: '/XhFirmOrder',
      name: 'XhFirmOrder',
      component: XhFirmOrder
    },
    {
      path: '/XhShoppingCart',
      name: 'XhShoppingCart',
      component: XhShoppingCart
    }
  ]
})
