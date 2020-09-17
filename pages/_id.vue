<template>
  <v-app>
    <div>
        <nuxt-child :artist="artist"/>
        <v-main>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <div class="text-center font-weight-bold">{{artist.artist_name}}</div>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->                    
                        <div class="text-xs-center" align = "center">                          
                              <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/`">About</v-btn>
                              <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/work`"> Work </v-btn>
                              <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/each1teach1`">Each 1 Teach 1</v-btn>                          
                              <!--
                                <v-btn outlined :to= "`/artists/${artist.id}/activities`">Activities</v-btn>                        
                                <v-btn outlined :to= "`/artists/${artist.id}/mythoughts`">My Blogs</v-btn>
                              -->
                        </div>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-main>
        
        <!--width="100%" height="80%"-->
        <center>
            <v-img :src = "artist.artist_image" width="100%" height="80%"  class="centerImage">
                <v-layout
                  align-end
                  fill-height
                  pa-3
                  white--text
                >
                  <div class="title font-weight-medium">{{ artist.artist_name }}</div>
                </v-layout>
            </v-img>
        </center>

        
        <br>
        <v-row align="center" no-gutters>
            <v-col align="center" justify="center" >  
                    <div class="text font-weight-thin"> Why Dance !</div>
                    <h3  class="mb-5 font-weight-light font-italic">
                        <br>
                        {{ artist.bio }}
                    </h3>              
                    <div class="text font-weight-thin"> -{{artist.artist_name}},{{ artist.country }} </div>
                    
            </v-col>
            <v-col >
                <v-container  grid-list-md class="ma-1 pa-1">
                    <!-- xs = 600px full screen (12) -->
                    <!-- md = 600px or more. half of the screen (6) -->
                    <v-layout class="d-flex flex-wrap">
                        <v-flex xs12 md6 v-for="gallery in artist.gallery" :key = "gallery.index">
                            <div v-if = gallery.g_upload_photo>
                                <v-img :src="gallery.g_upload_photo" class="centerImage" width = "300px" height = "300px"/>
                            </div>
                            <!--<GalleryCard :gallery = "gallery"></GalleryCard>-->
                        </v-flex>
                    </v-layout>
                </v-container>

            </v-col>
        </v-row>

        <br>
        <br>
        <v-row no-gutters>            
            <v-col md="6" offset-md="3">
                <h4  class="mb-5 font-weight-light">{{ artist.introduction }}</h4>
            </v-col>            
        </v-row>
       
        
        

    </div>
  </v-app>
</template>

<script>
import EventService from '@/services/EventService.js'
import GalleryCard from '@/components/GalleryCard.vue'

export default {
    //layout: 'idlayout',
    components:{
        GalleryCard,
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
      } catch (err) {
        error({statusCode:503,  message: err.message})
        }
    },
    
}
/* <div class="d-flex flex-wrap">
            <div v-for = "gallery in artist.gallery" :key = "gallery.index">
               <GalleryCard :gallery = "gallery"></GalleryCard>
                <!--<img :src="gallery.g_upload_photo"  class="centerImage">-->
            </div>
        </div>*/ 
</script>

<style scoped>

</style>
