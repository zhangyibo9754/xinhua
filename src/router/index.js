import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import XhLoginPost from "../pages/XhLoginSon/XhLoginPost.vue"
import XhLogin from "../pages/XhLogin.vue"
import XhLoginTreaty from "../pages/XhLoginSon/XhLoginTreaty.vue"
import XhLoginForget from "../pages/XhLoginSon/XhLoginForget.vue"
import XhLoginLogon from "../pages/XhLoginSon/XhLoginLogon.vue"
import XhSearch from "../pages/XhSearch.vue"
=======
<<<<<<< HEAD
import XhThemePages from '../pages/XhThemePages'
=======
<<<<<<< HEAD
import XHmine from '../components/mine/XHmine'
import XhMyOrder from '../pages/XhMyOrder'
import XhEvaluationCentre from '../pages/XhEvaluationCentre'
import XhAfterSale from '../pages/XhAfterSale'
import XhDiscounts from '../pages/XhDiscounts'
import XhLibrary from '../pages/XhLibrary'
=======
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
>>>>>>> 3be3d853084f86518c3740ddd88292796299802d

<<<<<<< HEAD
// 引入页面组件
import XhProductDetail from '.././pages/XhProductDetail'
import XhProductsList from '.././pages/XhProductsList'



=======
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

>>>>>>> 057482b11e1de3a2d194c8a101f03ff660f80343
>>>>>>> 77089dcf554e9f93ce213e94e9d1ac5af4b94b64
>>>>>>> 6c245f1274868d18239ae13ab311ce25136036a6
Vue.use(Router)
=======
>>>>>>> d591c469fcfc898425834267c69a84e461229ad6

Vue.use(Router)
export default new Router({
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
mode: 'history',
  base: process.env.BASE_URL,
  routes: [
		{
			path:"/",
			redirect:"/Login"
		},
		{
			path:"/Login",
			name:"XhLogin",
			component:XhLogin,
		},
		{
			path:"/treaty",
			name:"XhLoginPost",
			component:XhLoginPost
		},
		{
			path:"/treatySecond",
			name:"XhLoginTreaty",
			component:XhLoginTreaty
		},
		{
			path:"/forget",
			name:"XhLoginForget",
			component:XhLoginForget
		},
		{
			path:"/logon",
			name:"XhLoginLogon",
			component:XhLoginLogon
		},
		{
			path:"/search",
			name:"XhSearch",
			component:XhSearch
		}
=======
<<<<<<< HEAD
  routes: [{
    path: '/',
    name: 'XhThemePages',
    component: XhThemePages
  }]
=======
<<<<<<< HEAD
	mode: 'history', 
  routes: [
		{
			path:'/Xhmine',
			name:'XHmine',
			component:XHmine
		},
    {
			path:'/XhMyOrder',
			name:'XhMyOrder',
			component:XhMyOrder
			},
			{
				path:'/XhEvaluationCentre',
				name:'XhEvaluationCentre',
				component:XhEvaluationCentre
				},
				{
					path:'/XhAfterSale',
					name:'XhAfterSale',
					component:XhAfterSale
					},
					{
						path:'/XhDiscounts',
						name:'XhDiscounts',
						component:XhDiscounts
						},
						{
							path:'/XhLibrary',
							name:'XhLibrary',
							component:XhLibrary
							},
=======
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
>>>>>>> 057482b11e1de3a2d194c8a101f03ff660f80343
>>>>>>> 77089dcf554e9f93ce213e94e9d1ac5af4b94b64
>>>>>>> 6c245f1274868d18239ae13ab311ce25136036a6
  ]
>>>>>>> 3be3d853084f86518c3740ddd88292796299802d
})
