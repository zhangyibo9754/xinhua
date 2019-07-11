import Vue from 'vue'
import Router from 'vue-router'
import XhLoginPost from "../pages/XhLoginSon/XhLoginPost.vue"
import XhLogin from "../pages/XhLogin.vue"
import XhLoginTreaty from "../pages/XhLoginSon/XhLoginTreaty.vue"
import XhLoginForget from "../pages/XhLoginSon/XhLoginForget.vue"
import XhLoginLogon from "../pages/XhLoginSon/XhLoginLogon.vue"
import XhSearch from "../pages/XhSearch.vue"
Vue.use(Router)

export default new Router({
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
  ]
})
