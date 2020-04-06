<template>
  <v-app>
    <div>
        <nuxt-child :blog="blog"/>
        <h2 class="text-center">{{blog.blog_name}}</h2>
        <h4 class="text-center">{{blog.blog_writer}}</h4> <!--need to fetch the name of the artist here somehow who wrote the blog-->
        <v-content>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <!--
                      <div class="text-xs-center">
                          <v-btn outlined :to= "`/blogs/${blog.id}/activities`">Activities</v-btn>
                          <v-btn outlined :to= "`/blogs/${artist.id}/my_blogs`">Blogs</v-btn>
                      </div>
                      -->
                  </v-flex>
              </v-layout>
          </v-container>
        </v-content>
        
        <center>
           <img :src="blog.blog_image" height = "45%" width="45%" class="centerImage">
        </center>
        <!--
        <div><p class="text-center">{{ artist.country}}</p></div>
        -->
        

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
            title: this.blog.id,     //do not miss "this"
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'In My Groove Blog #' + this.blog.blog_name
                }
            ]
        }
    },
    async asyncData({error, params}) {
      try {
        const response = await EventService.getBlog(params.id)
        return {
        blog: response.data   //event ...... NOT events here , dont miss this one..
        }
      } catch (e) {
        error({statusCode:503, message: "unable to fetch data for the blog#"  + params.id })
        }
    },
}

</script>
