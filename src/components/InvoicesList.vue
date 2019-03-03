<template>
  <v-layout>
    <v-flex xs12 >
      <v-card>

        <v-list two-line subheader>

          <v-list-tile
            v-for="(invoice, i) in invoices"
            :key="invoice.invoiceName + i"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon>assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ invoice.invoiceName }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ invoice.invoiceTitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1" v-on:click="removeInvoices(invoice.invoiceName)">delete</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Invoice from '../../application/Invoice.ts'
export let invoiceElement = new Invoice()
export default {
  name: 'InvoicesList',
  data () {
    let invoices = invoiceElement.getAllInvoice()
    return {
      invoices
    }
  },
  computed: {
    removeInvoices: (event) => {
      invoiceElement.removeInvoice(event)
    }
  }
}
</script>

<style lang="sass">
</style>
