<template>
  <div id="app">
    <Header></Header>
   <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import { Invoice } from '../application/Invoice'
export const invoiceElement = new Invoice()
export default {
  name: 'App',
  components: { Header }
}
</script>

<style
  src="../static/styles/global.scss"
  lang="scss">
</style>
