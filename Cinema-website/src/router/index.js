import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Navbar from '@/components/Navbar'
import showtime from '@/components/showtime'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'showtime',
      component: showtime
    }
  ]
})
