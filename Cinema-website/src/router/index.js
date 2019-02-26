import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import selectseat from '../pages/selectseat'
import eticket from '../pages/eticket'
import payment from '../pages/payment'

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
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/e-ticket',
      name: 'eticket',
      component: eticket
    }
  ]
})
