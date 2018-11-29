<template>
  <v-layout fill-height justify-center align-center row wrap>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content v-for="(item, index) of playlist" :key="index">
          <div slot="header">{{item.name}}</div>
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
import axios from "axios";
export default {
  layout: "home",
  async asyncData({ store }) {
    let token = await store.state.user.token;
    let config = {
      headers: { Authorization: "Bearer " + token }
    };
   
    return await axios
      .get("https://api.spotify.com/v1/me/playlists", config)
      .then(async res => {
        let playlist =[]
        let tracks =[]
        const { items } = res.data;
        await items.map(item =>{
          let musicas =[]
           axios.get(`https://api.spotify.com/v1/playlists/${item.id}/tracks?fields=items(track(name,href,album(name,href)))`, config)
          .then(async res => {
            const {items} = res.data
          
            await items.map(track => musicas.push(track))
          })
          .catch((e) => console.log(e))
           let a ={
            id: item.id,
            name: item.name,
            totalTracks: item.tracks.total,
            faixas: musicas

          }
         store.commit('setPlaylist', a)
        
        
        })
         
      })
      .catch(e => console.log(e));
  },
  data() {
    return {
      panel: [false, false, false],
      url: "https://api.spotify.com",
      playlist:[],
      musicas:[]
    };
  },
  computed:{
   
  },

  created() {
    console.log(this.$store.state.user);
  },
  methods: {
  getTracksPlaylists(id){
    let config = {
      headers: { Authorization: "Bearer " + this.$store.state.user.token }
    };
    axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(name,href,album(name,href)))`)
    .then()
    .catch()
  }
  }
};
</script>