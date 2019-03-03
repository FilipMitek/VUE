import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'
import InvoicesList from '../components/InvoicesList'
import AddInvoices from '../components/AddInvoices'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InvoicesList',
      component: InvoicesList
    },
    {
      path: '/addInvoices',
      name: 'AddInvoices',
      component: AddInvoices
    }
  ]
})
