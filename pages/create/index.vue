<template>
  <v-app>
      <v-container>
        <v-row no-gutters>
          <v-col md="6" offset-md="3">
            <v-row>
              <v-col>
                <img src = "~/assets/goku.png"  width="80%" alt="In My Groove logo"></img>

              </v-col>
              <v-col>
                <div align-center justify-center>
                  
                  <div text class="mb-5 font-weight-bold" >Yo, What's up !! </div>
                  <div text class="mb-5 font-weight-light">
                    I am Goku, 12 year old dancer & InMyGroove mascot.</div>
                  <!--<div text class="mb-5 font-weight-thin">
                    I am young and learning, but I can dance well and even battle u,
                    coz I am dope, because my teachers are the dopest.
                  </div>-->
                  <div text class="mb-5 font-weight-light">
                    but before, let's make your website.
                    just click on "about" and get started.
                  </div>
                  <hr>
                  <div text class="mb-5 font-weight-bold">btw, let's get down sometime.</div>
                  <!--<v-btn xs6 rounded outlined color="error">Check me out!</v-btn>-->
                </div>

              </v-col>
            </v-row>
  
          </v-col>
        </v-row>
      </v-container>
      
      <br>
      <br>
      <br>
      <br>

      <v-main>
        <v-container fill-height>
          <v-layout justify-center>
              <v-flex xs6>

                  <div class="text-xs-center" align = "center">
                    <v-btn rounded outlined class="text-capitalize" :to= "`/create/about/`">Start Building</v-btn>
                    <v-btn rounded outlined class="text-capitalize">Edit here</v-btn>
                    <!--<v-btn rounded outlined class="text-capitalize" :to= "`/website/work/`"> Work </v-btn>-->
                    <!--<v-btn rounded outlined class="text-capitalize" :to= "`/website/each1teach1/`">Each 1 Teach 1 </v-btn>-->
                  </div>
                  <br>
                  
                      
                  <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

              </v-flex>
          </v-layout>
          
        </v-container>
      </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>template