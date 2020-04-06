<template>
  <v-app>
    <div>
        <nuxt-child :artist="artist"/>
        <h2 class="text-center">{{artist.name}}</h2>
        <v-content>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <div class="text-xs-center">
                          <v-btn outlined :to= "`/artists/${artist.id}/activities`">Activities</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/my_blogs`">Blogs</v-btn>
                      </div>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-content>
        
        <center>
           <img :src="artist.artist_image" height = "45%" width="45%" class="centerImage">
        </center>
        
        <div><p class="text-center">{{ artist.country}}</p></div>
        

    </div>
  </v-app>
</template>

<script>
//import EventNavBar from '@/pages/event/_id/EventNavBar.vue'
import EventService from '@/services/EventService.js'
export default {
    //props: ['event'],
    head() {
        return {
            title: this.artist.id,     //do not miss "this"
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'What you need to know about this artist #' + this.artist.name
                }
            ]
        }
    },
    async asyncData({error, params}) {
      try {
        const response = await EventService.getArtist(params.id)
        return {
        artist: response.data,  //event ...... NOT events here , dont miss this one..
        }
      } catch (e) {
        error({statusCode:503, message: "unable to fetch data for the artist#"  + params.id })
        }
    },
}

</script>
