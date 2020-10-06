<template>
  <v-app>
    <div>
      <center>
            <img src = "~/assets/art1.jpeg"  width="60%" alt="In My Groove Community photo"><img>
            <!--<v-img :src = "art1.jpeg" width="100%" height="80%"  class="centerImage">-->
            
      </center>
      <h6 class = "display-1 ma-4 d-flex justify-center ">Pass The HipHop community</h6>
      <div text align="center">
        click & check their websites.
      </div>
        
        <v-container>
          <v-row>
            <v-col></v-col>
            <v-col>
              <!--<input type="text" v-model="search" placeholder="search artists"/>-->
              <v-text-field
                label="Search Dancers"
                placeholder="Placeholder"
                outlined
                v-model="search"
              ></v-text-field>
            </v-col>
            <v-col></v-col>
          </v-row>
        </v-container>
        
    </div>

    <div class="d-flex flex-wrap">
          <div v-for="artist in filteredArtists" :key ="artist.index">
            <ArtistCard :artist="artist" ></ArtistCard>  <!-- can add class = "ma-1 pa-1" -->
          </div>
    </div>
  </v-app>
</template>

<script>
import ArtistCard from '@/components/ArtistCard.vue'
import EventService from '@/services/EventService.js'
//import func from '~/vue-temp/vue-editor-bridge'
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
  },
  data() {
    return {
      search: ""
    }
  },
  computed: {
    filteredArtists: function(){
      return this.artists.filter((artist) => {
        return artist.artist_name.toLowerCase().match(this.search.toLowerCase());
      });
      
    }
  }
}
//filteredA
//toLowerCase()
</script>
