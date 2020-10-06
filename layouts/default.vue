<template>
  <v-app>
    <!--<v-app-bar color="white" height="50px" app>-->  
      <!--<v-row align="left">-->
      <v-row >
        <v-col class="text-center" cols="12" sm="2" >
          <div>
            <v-btn text class="ma-1" color="black" small to='/'>Pass The HipHop</v-btn>
          </div>
        </v-col>
      </v-row>
    <br>
    <v-main>
      <nuxt/>
    </v-main>
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


