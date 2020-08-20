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
            <v-btn rounded class="ma-4" outlined color="black" large to = '/artists/create'>create your own website</v-btn>
            <v-btn rounded class="ma-4" outlined color="black" large to = '/artists'>find artists</v-btn>
            <v-btn rounded class="ma-4" outlined color="black" large to = '/blogs'>write a blog for the community</v-btn>
        </div>
        <br>
        <hr>
        <div class="font-weight-thin">developed by the dancers, for the dancers with music & lots of love.</div>
        
        
      </div>
  </v-app>     
</template>

<script>
var i = 0;

export default {

  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Home Page',
      
    }
  }, 
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