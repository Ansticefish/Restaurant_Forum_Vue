import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/404NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () => import('../views/UserProfile.vue')
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import ('../views/SignUp.vue') 
  },
  {
    path: '*', //run when the path doesn't meet any previous path
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
