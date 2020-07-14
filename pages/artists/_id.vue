<template>
  <v-app>
    <div>
        <nuxt-child :artist="artist"/>
        <h2 class="text-center">{{artist.artist_name}}</h2>
        <SemiNavBar></SemiNavBar>
        
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
import SemiNavBar from '@/components/SemiNavBar.vue'

export default {
    components:{
        SemiNavBar
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
