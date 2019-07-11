import Vue from 'vue'
import Router from 'vue-router'
import XhIndex from "../pages/XhIndex"

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

  ]
})
