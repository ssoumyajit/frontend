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
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/work`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>                            
                        <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

                    </v-flex>
                </v-layout>
                
              </v-container>
            </v-main>
        </div>
         <v-row >
            <!--<v-col cols="6" md="4" align="left" justify="center"></v-col>-->

            <v-col cols="12" md="8" align="left">                    
                    <div align="center" class="mb-5 font-weight-bold" v-if="artist.milestone.length > 0">
                        Milestones 
                    </div>
                          
                    <div class="d-flex flex-wrap" >
                        <div v-for = "milestone in artist.milestone" :key = "milestone.index" >
                            <MilestoneCard :milestone = "milestone"></MilestoneCard>
                        </div>
            
                    </div>
            </v-col>
        </v-row>
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