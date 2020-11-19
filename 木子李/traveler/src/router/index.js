import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Mail from '@/components/Mail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mail',
      component: Mail
    },
    // {
    //   path: '/',
    //   name: 'Login',
    //   component: Login
    // },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
