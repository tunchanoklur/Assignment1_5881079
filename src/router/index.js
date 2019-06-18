import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/Pages/LoginPage'
import ShowContacts from '@/components/Pages/ShowContacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ShowContacts
    }
  ]
})
