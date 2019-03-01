<template>
  <v-layout>
    <v-flex xs12 >
      <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>My files</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
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

<style scoped>

</style>
