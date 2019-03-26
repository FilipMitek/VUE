<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
        >
          <v-text-field
            v-model="invoiceName"
            :counter="10"
            label="Invoice name"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>

      <v-layout>
        <v-flex
          xs12 md4
        >
          <v-text-field
            v-model="invoiceFrom"
            :counter="10"
            label="Invoice from"
            required
          ></v-text-field>

        </v-flex>

        <v-flex
          xs12 md4
        >
          <v-text-field
            v-model="invoiceTo"
            label="Invoice to"
            required
          ></v-text-field>
        </v-flex>

      </v-layout>

        <v-layout row wrap>
          <v-flex xs6 md4>
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

          <v-flex xs6 md4>
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

          <v-btn fab dark small color="indigo" v-on:click="countes++">
            <v-icon>
              add
            </v-icon>
          </v-btn>

      </v-layout>

        <v-flex xs12>
          <li
            v-for="(count, i) in countes"
            :key="count + i"
          >
            <v-layout>
              <v-flex
                xs3
              >
                <v-text-field
                  v-model="productName[count]"
                  :counter="10"
                  label="Product"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex
                xs3
              >
                <v-text-field
                  v-model="price[count]"
                  label="Price"
                  required
                ></v-text-field>
              </v-flex>

              <v-flex
                xs3
              >
                <v-text-field
                  v-model="quantity[count]"
                  label="Quantity"
                  required
                ></v-text-field>

              </v-flex>
              <v-flex v-if="price[count]>0 && quantity[count]>0"
                xs2
              >
                <p>
                  Total Price: {{price[count]*quantity[count]}}
                </p>
              </v-flex>

              <v-flex
                xs2 md1
              >
                <v-btn v-on:click="invoiceElement.addInvoice({invoiceName, invoiceTitle, paid, paidDate, sellDate, invoiceTo, invoiceFrom})" class="material-icons">
                  add
                </v-btn>
              </v-flex>

            </v-layout>
          </li>

        </v-flex>
    </v-container>
  </v-form>
</template>

<script>
import { invoiceElement } from '../App'
export default {
  data: function () {
    return {
      invoiceName: invoiceElement.invoiceName,
      invoiceTitle: invoiceElement.invoiceTitle,
      invoiceFrom: invoiceElement.invoiceFrom,
      invoiceTo: invoiceElement.invoiceTo,
      paidDate: new Date().toISOString().substr(0, 10),
      sellDate: new Date().toISOString().substr(0, 10),
      paid_date_menu: false,
      sell_date_menu: false,
      valid: false,
      paid: false,
      countes: 0,
      price: [0],
      quantity: [0],
      productName: [''],
      invoiceElement,
      nameRules: [
        v => v.length <= 25 || 'Max 25 characters'
      ]
    }
  }
}
</script>

<style lang="scss">

  li {
    list-style: none;
  }
  p {
    padding-top: 20%;
  }

  .v-input__control {
    margin: 10px;
  }

</style>
