<template>
  <v-layout fill-height justify-center align-center row wrap>
    <v-flex xs12 sm12 md12 lg12 xl12>
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content v-for="(item, index) of playlist" :key="index">
          <div slot="header">{{item.name}}</div>
          <v-card v-for="(track, index) of item.tracks" :key="index" >
            <Card :name="track.track.name" :image="track.track.album.images['0'].url" :dataL="track.track.album.release_date.substring(0,4)"></Card>
            <v-card-text
              class="#303030"
            ></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
import Card from "~/components/Card"
export default {
  components:{
Card
  },
  layout: "home",
  
  data() {
    return {
      panel: [false, false, false],
      url: "https://api.spotify.com",
      playlist:[],
      musicas:[]
    };
  },
 
  created(){
    console.log()
    this.getPlaylist(this.$store.state.user.token)
  },
  methods:{
    getPlaylist(token){
      let config = { headers: { Authorization: "Bearer " + token } }
       axios.get("https://api.spotify.com/v1/me/playlists", config)
      .then(async res => {
        let playlist =[]
        let tracks =[]
        const { items } = res.data;
        await items.map(async (item) =>{
          let t =[]
         //await this.getTracksPlaylists(item.id, token)
          let a = await {
            id: item.id,
            name: item.name,
            tracks: await this.getTracksPlaylists(item.id, token)
          }
          console.log(a)
          this.playlist.push(a)
        })
         
      })
      .catch(e => console.log(e));
    },
    async  getTracksPlaylists (id, token){
    let ms =[]
    let config = { headers: { Authorization: "Bearer " + token } }
    await axios.get(`https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(name,href,album(name,href,images,release_date)))`, config)
    .then(res => {
      res.data.items.map(item =>{
        ms.push(item)
      })
     
      }
      )
    .catch(e => console.log(e))
    return ms
    ms =[]
    
  }
  }
};
</script>