<template>
  <v-app>
    <v-app-bar color="deep-purple accent-3" app>     
      <v-btn to = '/' text>InmyGroove</v-btn>  <!-- nuxt-link instead of router-link-->
      <v-btn text to = '/artists'>Artists</v-btn>
      <v-spacer/>
    </v-app-bar>

    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
//import NavBar from '@/components/NavBar.vue'
export default {
  components:{
    //NavBar
  },

  head() {  //head function (a property of vue-meta), returns an object
    return {
      titleTemplate: '%s - InMyGroove',
      meta: [
        {
          hid: 'description', //create page overrides the description, hid helps to stop redundancy
          name: 'description',
          content: 
              'InMyGroove - The thread connecting music, movement and artists, connecting HipHop Elements'
        }
      ]
    }
  } 
}
</script>


