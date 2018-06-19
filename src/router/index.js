import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Regedit from '@/components/Regedit'
import GetPassword from '@/components/GetPassword'
import MainView from '@/components/MainView'
import UserInformationView from '@/components/MainView'
import InvigilateInfoView from  '@/components/InvigilateInfoView'
import testVue from '@/components/testVue'
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
      component:MainView,
      children:[
        {
          path:'/Main/UserInfo',
          name:'UserInformationView',
          component:UserInformationView
        },
        {
          path:'/Main/InvigilateInfoView',
          name:'InvigilateInfoView',
          component:InvigilateInfoView

        }
      ]
    },
    {
      path:'/testVue',
      name:'testVue',
      component:testVue
    }

  ]
})
