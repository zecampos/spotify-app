<template>
  <v-toolbar dark color="#303030">
   <v-avatar size="36" >
          <img src="~/assets/icon.png" alt="avatar">
        </v-avatar>
 <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">Spotify Playlist</v-toolbar-title>

    <v-spacer></v-spacer>
    <p>{{id}}</p>
    
    <v-btn icon>
    <v-avatar size="36" >
          <img :src="img" alt="avatar">
        </v-avatar>
    </v-btn>

    <v-btn @click="logOut" icon>
      
      <v-icon>exit_to_app</v-icon>
    </v-btn>
  </v-toolbar>
</template>
<script>
  export default{
     computed:{
      img(){
        return this.$store.state.user.img
      },
      id(){
        return this.$store.state.user.id
      }
    },
    methods:{
      async logOut(){
        await this.$store.commit("setToken", '')
        await this.$store.commit("setUser", '');
        await this.$store.commit("setImg", '');
        await this.$router.push("/");
      }
    }
  }
</script>