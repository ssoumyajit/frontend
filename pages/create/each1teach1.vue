<template>
    <v-app>
        <v-main>
          <v-container fill-height>
            <v-layout justify-center>
                <v-flex xs6>

                    <div class="text-xs-center" align = "center">
                      <v-btn rounded outlined class="text-capitalize" :to= "`/create/about/`">About</v-btn>
                      <v-btn rounded outlined class="text-capitalize" :to= "`/create/work/`"> Work </v-btn>
                      <v-btn color="error" rounded outlined class="text-capitalize" :to= "`/create/each1teach1/`">Each 1 Teach 1 </v-btn>
                    </div>
                    <br>
                    
                        
                    <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

                </v-flex>
            </v-layout>
            
          </v-container>
        </v-main>
    </v-app>
</template>