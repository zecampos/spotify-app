<template>
  <v-layout fill-height justify-center align-center row wrap>
    <v-flex class="pa-5" xs12 sm12 md6 lg6 xl4>
      <h1 class="white--text text-xs-center">Redirect....</h1>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";

export default {
  async created() {
    await this.$store.commit("setToken", this.$route.query.access_token);
    await this.getUser(this.$route.query.access_token);
    await this.$router.push("/home");
  },
  methods: {
    getUser(t) {
      let config = { headers: { Authorization: "Bearer " + t } };
      axios
        .get("https://api.spotify.com/v1/me", config)
        .then(res => {
          const { id, images } = res.data;
          this.$store.commit("setUser", id);
          this.$store.commit("setImg", images[0].url);
        })
        .catch(e => console.log(e));
    }
  }
};
</script>