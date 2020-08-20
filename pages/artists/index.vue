<template>
  <v-app>
    <div>
        <h6 class = "display-1 ma-4 d-flex justify-center ">InmyGroove community</h6>
        <div text align="center">
          click & check their websites.
        </div>
        
        <div class="d-flex flex-wrap">
          <div v-for="artist in artists" :key ="artist.index">
            <ArtistCard :artist="artist" ></ArtistCard>  <!-- can add class = "ma-1 pa-1" -->
          </div>
        </div>
        
    </div>
  </v-app>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import EventService from '@/services/EventService.js'
export default {
  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Artistlist -InMyGroove',
      meta: [ 
        {
          hid: 'description',
          name: 'description',
          content: 
              'List of artists joined - InMyGroove'
        }
      ]
    }
  },
  async asyncData({error}) {
    try {
      const response = await EventService.getArtists()
      return {
        artists: response.data
      }
    } catch (e) {
        error({statusCode:503, message: "unable to fetch artist data at this point"})
    }
  },
  components: {
    ArtistCard
  }
}
</script>
