import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import XhCashierDesk from '@/pages/XhCashierDesk'
import XhManageAddress from '@/pages/XhManageAddress'
import XhSelectAddress from '@/pages/XhSelectAddress'
import XhCreateAddress from '@/pages/XhCreateAddress'
import XhFirmOrder from '@/pages/XhFirmOrder'
import XhShoppingCart from '@/pages/XhShoppingCart'
=======
<<<<<<< HEAD
import XhCountSetting from "../pages/XhCountSetting"
import XhPersonalMessage from "../pages/XhPersonalMessage"
import XhUpdatePassword from "../pages/XhUpdatePassword"
import XhUpdatePhone from "../pages/XhUpdatePhone"
import XhCountBind from "../pages/XhCountBind"
import XhDestoryCount from "../pages/XhDestoryCount"
import XhAddressManagement from "../pages/XhAddressManagement"
import XhCreateAddress from "../pages/XhCreateAddress"
import XhBillManagement from "../pages/XhBillManagement"
import XhCreateBill from "../pages/XhCreateBill"
import XhSetting from "../pages/XhSetting"
import XhComplaintFeedback from "../pages/XhComplaintFeedback"
import XhCollection from "../pages/XhCollection"

=======
import XhIndex from "../pages/XhIndex"
import XhMessage from '../pages/XhMessage'
import XhMessagePages from '../pages/XhMessagePages'
import XhGiftCards from '../pages/XhGiftCards'
import XhMyStudy from '../pages/XhMyStudy'

<<<<<<< HEAD
// 引入页面组件
import XhClassify from '.././pages/XhClassify'
>>>>>>> 9a943b91756653f18d42cf8415b01a2b1dc9e94b
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d

Vue.use(Router)
=======
>>>>>>> d591c469fcfc898425834267c69a84e461229ad6

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
    {path:"/XhCountSetting",component:XhCountSetting},
    {path:"/XhPersonalMessage",component:XhPersonalMessage},
    {path:"/XhUpdatePassword",component:XhUpdatePassword},
    {path:"/XhUpdatePhone",component:XhUpdatePhone},
    {path:"/XhCountBind",component:XhCountBind},
    {path:"/XhDestoryCount",component:XhDestoryCount},
    {path:"/XhAddressManagement",component:XhAddressManagement},
    {path:"/XhCreateAddress",component:XhCreateAddress},
    {path:"/XhBillManagement",component:XhBillManagement},
    {path:"/XhCreateBill",component:XhCreateBill},
    {path:"/XhSetting",component:XhSetting},
    {path:"/XhComplaintFeedback",component:XhComplaintFeedback},
    {path:"/XhCollection",component:XhCollection},

=======
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
>>>>>>> 9a943b91756653f18d42cf8415b01a2b1dc9e94b
>>>>>>> c043263754feda22a7a87da6e5e50709dfc6164d
  ]
})
