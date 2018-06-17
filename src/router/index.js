import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regedit from '@/components/Regedit'
import GetPassword from '@/components/GetPassword'
import MainView from '@/components/MainView'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Regedit',
      name: 'Regedit',
      component: Regedit
    },
    {
      path: '/GetPassword',
      name: 'GetPassword',
      component: GetPassword
    },
    {
      path:'/',
      redirect:'/Main'
    },
    {
      path:'/Main',
      name:'MainView',
      component:MainView
    }
  ]
})
