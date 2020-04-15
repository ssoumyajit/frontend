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
        
        <div>
            <p class="text-center">{{ artist.country}}</p>
        </div>

        <br>
        
        <div>
            <div>
                <h6 class = "display-1 ma-4 d-flex justify-center ">List of Blogs</h6>
                
                <div class = "display-1 ma-4 d-flex justify-center ">
                  <div v-for="blog in blogs" :key ="blog.index">
                    <BlogCard :blog="blog" ></BlogCard>  <!-- can add class = "ma-1 pa-1" -->
                  </div>
                </div>
                
            </div>
        </div>
        

    
        

    </div>
  </v-app>
</template>

<script>
//import EventNavBar from '@/pages/event/_id/EventNavBar.vue'
import EventService from '@/services/EventService.js'
import BlogCard from '@/components/BlogCard.vue'
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
        let artist_response = await EventService.getArtist(params.id)
        let blogs_response = await EventService.getBlogs()

        return {

            artist: artist_response.data,  //event ...... NOT events here , dont miss this one..
            blogs: blogs_response.data
        }
      } catch (e) {
        error({statusCode:503,  message: err.message})
        }
    },
    
    components: {
        BlogCard
    }
}

</script>
