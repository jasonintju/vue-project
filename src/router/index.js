import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Activity from '@/pages/Activity'
import Shop from '@/pages/Shop'
import Detail from '@/pages/Detail'
import My from '@/pages/My'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/shop',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/detail/:id?',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
