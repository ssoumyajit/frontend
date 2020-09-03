<template>
    <v-app>
        <div>
            <nuxt-child :artist="artist"/>
            <h3 class="text-center">{{artist.artist_name}}</h3>

            <v-main>
              <v-container fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center" align = "center">
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/bio_n_work`">Biography</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/work`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>
                        <br>
                        
                            
                        <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

                    </v-flex>
                </v-layout>
                
              </v-container>
            </v-main>
        </div>

        <!--<v-container class="grey lighten-5">--> <!--gives that shady rectangular boundary around the component-->
            <div >
                <v-row >            
                    <v-col md="6" offset-md="3">
                        <br>
                        <h5>Biography</h5>
                        <div v-if="artist.biography != NULL" >
                            <h4 class="mb-5 font-weight-light">{{ artist.biography.bi_content}}</h4>
                        </div>
                        
                    </v-col>            
                </v-row>
            </div>            
        <!--</v-container>-->
        
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
    components: {
    }
}
/*
<v-container full-width>
                 <v-row align="center" justify="center">
                 <v-col cols="12" md="6">
                 <h3>something</h3>
                 <h4>something too</h4>
                 </v-col>
                 </v-row>
</v-container>

<div>
                        
    <img src = "~/assets/ba3.gif" width="30%" alt="Artist movement gif" class="center"></img>                        
    <img src = "~/assets/ba2.gif" width="30%" alt="Artist movement gif" class="center"></img>                                                
    <img src = "~/assets/ba3.gif" width="30%" alt="Artist movement gif" class="center"></img>
                                    
</div>
*/
</script>
