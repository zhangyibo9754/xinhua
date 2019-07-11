import Vue from 'vue'
import Router from 'vue-router'
import XHmine from '../components/mine/XHmine'
import XhMyOrder from '../pages/XhMyOrder'
import XhEvaluationCentre from '../pages/XhEvaluationCentre'
import XhAfterSale from '../pages/XhAfterSale'
import XhDiscounts from '../pages/XhDiscounts'
import XhLibrary from '../pages/XhLibrary'
Vue.use(Router)

export default new Router({
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
  ]
})
