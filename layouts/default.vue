<template>
<v-app>
  <v-content>
    <v-container fluid>
      <Header></Header>
      <nuxt/>
    </v-container>
  </v-content>
</v-app>
 
</template>
<script>
import Header from '~/components/Header'
export default {
  components :{
    Header
  }
}
</script>
