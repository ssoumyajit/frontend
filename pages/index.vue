<template>
  <v-app>
      
      <div align="center">  
        <img src = "~/assets/pencil_art2.png"  width="50%" alt="In My Groove logo"></img>
        <v-row no-gutters>            
            <v-col md="6" offset-md="3">
              <br>
              <div class="mb-5 font-weight-light"> "Pass The HipHop" a.k.a PATH, is a community platform to celebrate the "Each 1 Teach 1" legacy of the HipHop culture.
                Here we can acknowledge all those HipHop artists who passed their knowledge, skill and experience to make us better 
                at our own craft. You can tag and appreciate your teachers and let them know how much their words and teachings meant to you in your own journey.
                similarly you will have a complete database of all your students and peers who learned something from you when they tag you.              
                Let's connect HipHop a little more, share it a little more...Together.
              </div>                
            </v-col>            
        </v-row>
        <br><br>
        <hr>

        <v-row align="center" no-gutters>
            <v-col align="center" justify="center" >
              <v-row no-gutters>            
                    <v-col md="10" offset-md="3">
                      <v-card>
                        <img src = "~/assets/portfolio.png"  width="100%" alt="portfolio logo"></img>
                      </v-card>                                     
                    </v-col>            
                </v-row>                    
            </v-col>

            <v-col >
                <v-row no-gutters>            
                    <v-col md="8" offset-md="2">
                      <br>
                      <div class="mb-5 font-weight-bold">
                        To be an artist ...... is a calling,
                        <br>
                        a profession of colors,dreams and hopes.

                      </div> 
                      <div class="mb-5 font-weight-light"> "Pass The HipHop" a.k.a PATH, is a community platform to celebrate the "Each 1 Teach 1" legacy of the HipHop culture.
                        Here we can acknowledge all those HipHop artists who passed their knowledge, skill and experience to make us better 
                        at our own craft. You can tag and appreciate your teachers and let them know how much their words and teachings meant to you in your own journey.
                        similarly you will have a complete database of all your students and peers who learned something from you when they tag you.              
                        Let's connect HipHop a little more, share it a little more...Together.
                      </div>                
                    </v-col>            
                </v-row>
  
              <br><br>
              <div>            
                  <v-btn rounded class="ma-4" outlined color="black" large to = '/artists'> Get Started</v-btn>
              </div>
            </v-col>
        </v-row>
        <hr>
        <br>

        <v-row align="center" no-gutters>

            <v-col >
                <v-row no-gutters>            
                    <v-col md="8" offset-md="2">
                      <br>
                      <div class="mb-5 font-weight-bold">
                        To be an artist ...... is a calling,
                        <br>
                        a profession of colors,dreams and hopes.

                      </div> 
                      <div class="mb-5 font-weight-light"> "Pass The HipHop" a.k.a PATH, is a community platform to celebrate the "Each 1 Teach 1" legacy of the HipHop culture.
                        Here we can acknowledge all those HipHop artists who passed their knowledge, skill and experience to make us better 
                        at our own craft. You can tag and appreciate your teachers and let them know how much their words and teachings meant to you in your own journey.
                        similarly you will have a complete database of all your students and peers who learned something from you when they tag you.              
                        Let's connect HipHop a little more, share it a little more...Together.
                      </div>                
                    </v-col>            
                </v-row>  
              <br><br>
            </v-col>

            <v-col align="center" justify="center" >
              <v-row no-gutters>            
                    <v-col md="10" offset-md="1">
                      <v-card>
                        <img src = "~/assets/each1teach1.png"  width="100%" alt="portfolio logo"></img>
                      </v-card>                                     
                    </v-col>            
                </v-row>                    
            </v-col>

        </v-row>

        <div>            
            <v-btn rounded class="ma-4" outlined color="black" large to = '/artists'> Find Artists</v-btn>
        </div>
        
        <br>
        <hr>
        <!--<div class="font-weight-thin">developed for the dancers, by the dancers with lots of love.</div>-->      
      </div>


  </v-app>     
</template>

<script>
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

/*
<v-avatar width="60px" height="60px">
          <img
            src="~/assets/yiyasha.jpeg"
            alt="yiyasha"
          >
        </v-avatar>
        <v-avatar width="60px" height="60px">
          <img
            src="~/assets/river.jpeg"
            alt="yiyasha"
          >
  </v-avatar>
<!--Every student can appreciate her/his teachers who shared their knowledge & Every teacher can find all of their students at one place.-->
*/
</script>