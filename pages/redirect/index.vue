<template>
   <v-layout fill-height justify-center align-center row wrap>

      <v-flex class="pa-5"  xs12 sm12 md6 lg6 xl4 >
       <h1 class="white--text text-xs-center" >Redirect....</h1>
      </v-flex>
   
      </v-layout>
</template>
<script>
    export default {
        async created (){
            //let token = new URLSearchParams(location.search).get('redirect?access_token')
            console.log(this.$route.query.access_token)
            this.$store.commit('setToken', this.$route.query.access_token)          
            this.$router.push('/home')
        }
    }
</script>