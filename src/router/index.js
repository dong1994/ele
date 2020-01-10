import Vue from 'vue'
import Router from 'vue-router'


import Msite from 'view/msite/Msite'
import Order from 'view/order/Order'
import Profile from 'view/profile/Profile'
import Search from 'view/search/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
