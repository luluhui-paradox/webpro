import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Regedit from '@/components/Regedit'
import GetPassword from '@/components/GetPassword'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/he',
      name: 'HelloWorld',
      component: HelloWorld
    },
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
    }
  ]
})
