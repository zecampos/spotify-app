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
    console.log(axios);
    let token = await store.state.user.token;
    let config = {
      headers: { Authorization: "Bearer " + token }
    };

    return await axios
      .get("https://api.spotify.com/v1/me/playlists", config)
      .then(async res => {
        let playlist =[]
        const { items } = res.data;
        await items.map(item =>{
          let a ={
            id: item.id,
            name: item.name,
            tracks: item.tracks.total
          }
          store.commit('setPlaylist',a)
        })
         
      })
      .catch(e => console.log(e));
  },
  data() {
    return {
      panel: [false, false, false],
      url: "https://api.spotify.com"
    };
  },
  computed:{
    playlist(){
      return this.$store.state.playlist
    }
  },

  created() {
    console.log(this.$store.state.user);
  },
  methods: {}
  // page component definitions
};
</script>