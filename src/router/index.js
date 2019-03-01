import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import AddInvoices from '../components/AddInvoices'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addInvoices',
      name: 'addInvoices',
      component: AddInvoices

    }
  ]
})
