<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-form v-model="valid">
    <v-container>

      <v-layout>
        <v-flex
          xs12
        >
          <v-text-field
            v-model="invoiceName"
            :rules="nameRules"
            :counter="10"
            label="Invoice name"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex
          md4
        >
          <v-text-field
            v-model="invoiceFrom"
            :rules="nameRules"
            :counter="10"
            label="Invoice from"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
          xs12
          md4
        >
          <v-text-field
            v-model="invoiceTo"
            :rules="emailRules"
            label="Invoice to"
            required
          ></v-text-field>
        </v-flex>

        <v-flex
        xs12
        md4
        >
          <v-btn v-on:click="addInvoices()">Add</v-btn>
        </v-flex>

      </v-layout>

        <v-layout row wrap>
          <v-flex xs12 sm6 md4>
            <v-menu
              ref="paid_date_menu"
              v-model="paid_date_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="paidDate"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="paidDate"
                  label="Paid date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="paidDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="paid_date_menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.paid_date_menu.save(paidDate)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>

          <v-flex xs12 sm6 md4>
            <v-menu
              ref="sell_date_menu"
              v-model="sell_date_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              :return-value.sync="sellDate"
              lazy
              transition="scale-transition"
              offset-y
              full-width
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="sellDate"
                  label="Sell date"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="sellDate" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="sell_date_menu = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.sell_date_menu.save(sellDate)">OK</v-btn>
              </v-date-picker>
            </v-menu>
          </v-flex>

          <v-btn fab dark small color="indigo">
            <v-icon>add</v-icon>
          </v-btn>
      </v-layout>

    </v-container>
  </v-form>
</template>

<script>
import { invoiceElement } from '../components/InvoicesList'
export default {
  data: () => ({
    paidDate: new Date().toISOString().substr(0, 10),
    sellDate: new Date().toISOString().substr(0, 10),
    paid_date_menu: false,
    sell_date_menu: false,
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    addInvoices: (event) => {
      invoiceElement.addInvoice(event)
    }
  }
}

</script>
