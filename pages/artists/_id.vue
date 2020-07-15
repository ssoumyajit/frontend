<template>
  <v-app>
    <div>
        <nuxt-child :artist="artist"/>
        <h2 class="text-center">{{artist.artist_name}}</h2>
        
        <v-content>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <div class="text-xs-center">
                          <v-btn outlined :to= "`/artists/${artist.id}/`">About</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/activities`">Activities</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/each1teach1`">Each 1 Teach 1</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/mythoughts`">My Blogs</v-btn>
                      </div>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-content>

        <center>
            <v-img :src = "artist.artist_image" width="50%" class="centerImage"/>
        </center>

        <div>
            <p class="text-center"> {{ artist.bio }}</p>
            <p class="text-center">{{ artist.country }}</p>
        </div>
        
        <!--<div class="d-flex flex-wrap">-->
        <div v-for = "gallery in artist.gallery" :key = "gallery.index">
           <img :src="gallery.g_upload_photo" height = "20%" width="20%" class="centerImage">
        </div>
        <!--</div>-->

    </div>
  </v-app>
</template>

<script>
import EventService from '@/services/EventService.js'

export default {
    //layout: 'idlayout',
    components:{
    },
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
        let artist_response = await EventService.getArtist(params.id)
        return {
            artist: artist_response.data,  //event ...... NOT events here , dont miss this one..
        }
      } catch (e) {
        error({statusCode:503,  message: err.message})
        }
    },
    
    components: {
       
    }
}
</script>

<style scoped>

</style>
