<template>
  <v-app>
    <v-container justify-center>
      <img src = "~/assets/inmygroove.png"  width="50%" alt="In My Groove logo" class="center"></img>
      <v-card width=1500px height=100px class = "ma-1 pa-1" color = "yellow">
        <v-text justify-center>You know that you have a groove that no other dancer has in this 
          world. We all have our grooves. It is our identity as dancers.
          When you dance someone connects deeply with you without your notice. 
          When you teach, a part of you lives in their dance. we are all unique
          yet connected.This is how Hip Hop connects, through sharing. Each One Teach One. "In My Groove" is an effort to connect us 
          a little more, connect Hip Hop a little more, connect the students with their 
          teachers and the teachers with their students a little more so that the legacy stays forever.
          <!--That is how our Hip Hop connects, through sharing. 
          "Each one Teach one".-->
        </v-text>  
      </v-card>
    </v-container>
    
    
    <!-- <h4>Home page</h4> -->
    <!--<img src = "~/assets/inmygroove2.png" width="50%"> -->
    <!--<GmapMap
      :center="{lat:10, lng:10}"
      :zoom="2"
      map-type-id="terrain"
      style="width: 100%; height: 600px"
    >
    </GmapMap>-->
  </v-app>     
</template>

<script>
//import EventNavBarVue from '@/pages/event/EventNavBar.vue';
var i = 0;
export default {
  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Home Page',
      
    }
  },
  //components: EventNavBarVue
  
}
//https://stackoverflow.com/questions/57800048/how-to-enable-dark-mode-with-custom-colors-in-light-theme-in-vuetify
</script>