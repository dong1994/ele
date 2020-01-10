import Vue from 'vue'
import Router from 'vue-router'


// import Msite from 'view/msite/Msite'
// import Order from 'view/order/Order'
// import Profile from 'view/profile/Profile'
// import Search from 'view/search/Search'



Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: () => import('view/msite/Msite')
  },
  {
    path: '/order',
    component: () => import('view/order/Order')
  },
  {
    path: '/profile',
    component: () => import('view/profile/Profile')
  },
  {
    path: '/search',
    component: () => import('view/search/Search')
  }
]

export default new Router({
  routes
})
