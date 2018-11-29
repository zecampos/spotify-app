<template>
  <v-toolbar dark color="#303030">
   <v-avatar size="36" >
          <img src="~/assets/icon.png" alt="avatar">
        </v-avatar>
 <v-spacer></v-spacer>
    <v-toolbar-title class="white--text">My Playlist</v-toolbar-title>

    <v-spacer></v-spacer>
    <p>{{id}}</p>
    
    <v-btn icon>
    <v-avatar size="36" >
          <img :src="img" alt="avatar">
        </v-avatar>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
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
  }
</script>