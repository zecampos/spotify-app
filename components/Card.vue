<template>
    <v-flex xs12>
            <v-card class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">{{name}}</div>
                      <div>{{album}}</div>
                      <div>{{dataL}}</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    :src="image"
                    height="75px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider white></v-divider>
              
            </v-card>
          </v-flex>
</template>
<script>
    export default{
        props:['name','image', 'album', 'dataL']
    }
</script>