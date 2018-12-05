import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      meta: {
        requireAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/Home/index',
      meta: {
        title: '首页',
        requireAuth: false
      },
      children: [
        {
          path: '/',
          name: 'homePage',
          component: reslove => require(['../pages/homePage'], reslove),
          meta: {
            title: '书屋首页',
            requireAuth: true
          }
        },
        {
          path: '/Indent/index',
          name: 'Indent',
          component: reslove => require(['../pages/Indent'], reslove),
          meta: {
            title: '我的订单',
            requireAuth: true
          }
        },
        {
          path: '/Library/index',
          name: 'Library',
          component: reslove => require(['../pages/Library'], reslove),
          meta: {
            title: '我的书房',
            requireAuth: true
          }
        },
        {
          path: '/Trolley/index',
          name: 'Trolley',
          component: reslove => require(['../pages/Trolley'], reslove),
          meta: {
            title: '购物车',
            requireAuth: true
          }
        },
        {
          path: '/Users/index',
          name: 'Users',
          component: reslove => require(['../pages/Users'], reslove),
          meta: {
            title: '个人中心',
            requireAuth: true
          }
        }
      ]
    }
  ]
})
