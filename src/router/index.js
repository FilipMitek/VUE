import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import HelloWorld from '../components/HelloWorld'
import AddInvoices from '../components/AddInvoices'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addInvoices',
      name: 'AddInvoices',
      component: AddInvoices
    }
  ]
})
