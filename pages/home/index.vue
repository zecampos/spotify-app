<template>
  <v-layout fill-height justify-center align-center row wrap>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content  v-for="(item, i) in 5" :key="i">
          <div slot="header">Item</div>
          <v-card>
            <v-card-text
              class="#303030"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  layout: "home",
  asyncData (){
  /*
     let config = {
        headers: {'Authorization': "bearer " + token}
   };

    return this.$axios.get('https://api.spotify.com/v1/me', config)
    .then((res) => console.log(res))
    .catch((e)=> console.log(e))*/
  },
  data () {
      return {
        panel: [false, false, false]
      }
    },
    created(){
    console.log(this.$store.state.user)
    },
    methods:{
      
    }
  // page component definitions
};
</script>