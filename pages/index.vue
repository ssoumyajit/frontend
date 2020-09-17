<template>
  <v-app>
      
      <div align="center">  
        <img src = "~/assets/pencil_art2.png"  width="40%" alt="In My Groove logo"></img>
        <br><br>
        <div class="mb-5 font-weight-light"> "In My Groove" is a community platform to celebrate the "each 1 teach 1" legacy of the HipHop culture.
          <br>
            Every student can appreciate her/his teachers who shared their knowledge & Every teacher can find all of their students at one place.
          <br>
            Let's connect HipHop a little more, share it a little more...Together.
        </div>
        <div>
            
            <v-btn rounded class="ma-4" outlined color="black" large to = '/artists'>find artists</v-btn>
            <v-btn rounded class="ma-4" outlined color="black" large to = '/create'>create your own website</v-btn>
        </div>
        <br>
        <hr>
        <!--<div class="font-weight-thin">developed for the dancers, by the dancers with lots of love.</div>-->      
      </div>

      <div>
        <h6 class = "display-1 ma-4 d-flex justify-center ">InmyGroove community</h6>
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

        <div class="d-flex flex-wrap">
          <div v-for="artist in filteredArtists" :key ="artist.index">
            <ArtistCard :artist="artist" ></ArtistCard>  <!-- can add class = "ma-1 pa-1" -->
          </div>
        </div>
        
    </div>
  </v-app>     
</template>

<script>
//var i = 0;
import ArtistCard from '@/components/ArtistCard.vue'
import EventService from '@/services/EventService.js'

export default {

  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Home Page',
      
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
//https://stackoverflow.com/questions/57800048/how-to-enable-dark-mode-with-custom-colors-in-light-theme-in-vuetify
//You know that you have a groove that no other dancer has in this 
         // world. We all have our grooves. It is our identity as dancers.
         // When you dance someone connects deeply with you without your notice. 
         // When you teach, a part of you lives in their dance. we are all unique
          //yet connected.This is how Hip Hop connects, through sharing. Each One Teach One. "In My Groove" is an effort to connect us 
          //a little more, connect Hip Hop a little more, connect the students with their 
          //teachers and the teachers with their students a little more so that the legacy stays forever.

/*
<v-avatar width="60px" height="60px">
          <img
            src="~/assets/yiyasha.jpeg"
            alt="yiyasha"
          >
        </v-avatar>
        <v-avatar width="60px" height="60px">
          <img
            src="~/assets/river.jpeg"
            alt="yiyasha"
          >
  </v-avatar>

*/
</script>