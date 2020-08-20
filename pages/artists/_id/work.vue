<template>
    <v-app>
        <div>
            <nuxt-child :artist="artist"/>
            <h3 class="text-center">{{artist.artist_name}}</h3>

            <v-content>
              <v-container fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center">
                          <v-btn outlined :to= "`/artists/${artist.id}/`">About</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/bio_n_work`">Biography</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/work`"> Work </v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>
                        <br>
                        
                            
                        <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

                    </v-flex>
                </v-layout>
                
              </v-container>
            </v-content>
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