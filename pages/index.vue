<template>
  <v-app>
    <!-- <h4>Home page</h4> -->
    <!--<img src = "~/assets/inmygroove2.png" width="50%"> -->
    <GmapMap
      :center="{lat:10, lng:10}"
      :zoom="2"
      map-type-id="terrain"
      style="width: 100%; height: 600px"
    >
      <!--<GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />-->
    </GmapMap>
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
</script>