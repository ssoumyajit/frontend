<template>
  <v-app>

    <v-container justify-center>
      <img src = "~/assets/inmygroove.png"  width="50%" alt="In My Groove logo" class="center"></img>
    </v-container>
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
</script>