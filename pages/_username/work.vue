<template>
    <v-app>
        <div>
            <nuxt-child :artist="artist"/>
            <v-main>
              <v-container fill-height>
                  <div class="text-center font-weight-bold">{{artist.artist_name}}</div>
                <v-layout align-center justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center" align="center">
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.username}/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.username}/work`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.username}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>
                                                  
                    </v-flex>
                </v-layout>               
              </v-container>
            </v-main>
        </div>
    </v-app>
</template>
<script>
import MilestoneCard from "@/components/MilestoneCard.vue"

export default {
    props: ['artist'],
    components: {
      MilestoneCard
    }
}
</script>