<template>
  <v-layout>
    <v-flex xs12 >
      <v-card>
        <v-toolbar color="light-blue">

          <v-toolbar-title >Invoices</v-toolbar-title>

          <v-spacer></v-spacer>

          <router-link to="/">
            <v-btn>
            Invoices list
            </v-btn>
          </router-link>

            <router-link to="/addInvoices">
              <v-btn>
                Add invoice
              </v-btn>
            </router-link>

        </v-toolbar>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped >
  .theme--light.v-toolbar {
    color: black;
    font-weight: lighter;
  }
  .v-toolbar__title{
    font-weight: lighter;
  }
  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
    background-color: #e5e5e5;
  }
  a{
    text-decoration: none;
  }
</style>
