import Vue from 'vue'
import Router from 'vue-router'
import XhThemePages from '../pages/XhThemePages'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'XhThemePages',
    component: XhThemePages
  }]
})
