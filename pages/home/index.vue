<template>
<div>
  <v-layout fill-height justify-center align-center row wrap>
    
    <v-flex xs12 sm12 md12 lg6 xl6>
      <!--<pulse-loader style="text-align:center" :loading="loading" color="#4caf50" size="30px"></pulse-loader>-->
      <v-expansion-panel v-model="panel" expand>
        <v-expansion-panel-content v-for="(item, index) of playlist" :key="index">
          <div slot="header">{{item.name}} </div>            
          <v-card v-for="(track, index) of item.tracks" :key="index" >
            <Card :name="track.track.name" :image="track.track.album.images['0'].url" :dataL="track.track.album.release_date.substring(0,4)"></Card>
            <v-card-text
              class="#303030"
            ></v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>

      
    </v-flex>
    <v-btn
    @click="modalNew = true"
    fixed
      dark
      fab
      bottom
      right
      color="green" >
        <v-icon>add</v-icon>
      </v-btn>


  </v-layout>
  <v-layout>
    <v-flex xs12 sm12 md12 lg6 xl6 justify-center align-center row wrap >
  <v-dialog v-model="modalNew" persistent max-width="80%">
     <v-layout  align-center row wrap>
       <v-flex xs12 sm12 md12 lg12 xl12 >
         <v-text-field class="ml-4 mr-4"  v-model="newPlaylist.name"  label="Name"  required  >
           
         </v-text-field>
         <v-text-field class="ml-4 mr-4" v-model="newPlaylist.description"  label="Description" >
         </v-text-field>
       </v-flex>
   
       <v-flex class="mb-4" xs12 sm12 md12 lg12 xl12 >
         <v-btn
         
      @click="clearPlaylistForm"
      color="white"
      class="black--text ml-4"
    >cancel
       </v-btn>
       <v-btn
      @click="createPlaylist"
      color="green"

      
    >create
       </v-btn>
    </v-flex>
    <v-snackbar
      v-model="snackbar.snackbar"
      multi-line="multi-line"
      right="right"
      :timeout="snackbar.timeout"
      top="top"
      vertical="vertical"
    >
    {{snackbar.text}}
    </v-snackbar>
     </v-layout>
    </v-dialog>
</v-flex>
  </v-layout>
</div>
</template>
<script>
import axios from "axios";
import Card from "~/components/Card";
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {
    Card,
   // PulseLoader
  },

  layout: "home",

  data() {
    return {
      panel: [false, false, false],
      url: "https://api.spotify.com",
      playlist: [],
      musicas: [],
      modalNew: false,
      newPlaylist:{
        name: "",
        collaborative: false,
        description: "",
        public: true
      },
      snackbar:{
        snackbar: true,
        y: 'top',
        x: null,
        mode: '',
        timeout: 6000,
        text: ''
      },
      loading: false
      
    };
  },
  created() {
     if (this.$store.state.user.token === '' || null){
        this.$router.push('/')
    }else{
    this.getPlaylist(this.$store.state.user.token);
    
    }
   

  },
  methods: {
    getPlaylist(token) {
      this.loading = true
      let config = { headers: { Authorization: "Bearer " + token } };
      axios
        .get("https://api.spotify.com/v1/me/playlists", config)
        .then(async res => {
          let playlist = [];
          let tracks = [];
          const { items } = res.data;
          await items.map(async item => {
            let t = [];
            //await this.getTracksPlaylists(item.id, token)
            let a = await {
              id: item.id,
              name: item.name,
              tracks: await this.getTracksPlaylists(item.id, token)
            };
            this.playlist.push(a);
          });
           this.loading = false
           this.showPlaylist()
        })
        .catch(e => {
           this.loading = false
          
          });
    },
    async getTracksPlaylists(id, token) {
      let ms = [];
      let config = { headers: { Authorization: "Bearer " + token } };
      await axios
        .get(
          `https://api.spotify.com/v1/playlists/${id}/tracks?fields=items(track(name,href,album(name,href,images,release_date)))`,
          config
        )
        .then(res => {
          res.data.items.map(item => {
            ms.push(item);
          });
        })
        .catch(e => console.log(e));
      return ms;
      ms = [];
    },
    resetForm (){
this.newPlaylist ={
        name: "",
        description: "",
        public: true
      }
    },
    clearPlaylistForm(){
      this.resetForm()
      this.modalNew = false
    },
    async createPlaylist (){
       let config = { headers: { 
          Authorization: "Bearer " + this.$store.state.user.token } };
      if (this.newPlaylist.name.length >2){
       await axios.post(`https://api.spotify.com/v1/users/${this.$store.state.user.id}/playlists`,this.newPlaylist, config).then(async res =>{
         await this.resetForm()
         this.playlist =[]
         await this.getPlaylist(this.$store.state.user.token);
         this.modalNew = false
       }).catch(error => console.log(error))
      
      }else{
         console.log( 'preencha os campos name')
      }
    
      
    }
  }
};
</script>