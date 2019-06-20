import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/components/Pages/LoginPage'
import ShowContacts from '@/components/Pages/ShowContacts'
import AddContact from '@/components/Pages/AddContact'
import EditContact from '@/components/Pages/EditContact'

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
    },
    {
      path: '/addcontact',
      name: 'AddContact',
      component: AddContact,
    },
    {
      path: '/editcontact',
      name: 'EditContact',
      component: EditContact,
      props:true
    }
  ]
})
