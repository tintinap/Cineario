import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import selectseat from '../pages/selectseat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/select-seat',
      name: 'selectseat',
      component: selectseat
    }
  ]
})
