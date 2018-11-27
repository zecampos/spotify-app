<template>
  <v-layout fill-height justify-center align-center row wrap>

      <v-flex class="div-login pa-5"  xs12 sm12 md6 lg6 xl4 style="" >
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 lg12 xl12 >
          <img class="logoImage" src="~/assets/logo.png" />
          </v-flex>
          <v-flex xs12 sm12 md12 lg12 xl12>
         <v-btn  v-on:click="logar" class="white--text" large  color="green">
           Login
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
   
      </v-layout>
</template>

<script>

export default {
  
  components: {
  },
  methods:{
    logar (){
     //this.$router.push('http://localhost:8888/login')
     window.open('http://localhost:8888/login','_self');
    }
  }
};
</script>

<style scoped>
.div-login{
text-align:center;
background-color: #0000007c;
}
.logoImage{
  max-width: 200px;
}
</style>
