<template>
<v-app dark>
  <v-content>
      <Header></Header>
    <v-container justify-center  fluid>
      <nuxt/>
    </v-container>
  </v-content>
</v-app>
 
</template>
<script>
import Header from '~/components/Header'
export default {
components:{
    Header
}
}
</script>

