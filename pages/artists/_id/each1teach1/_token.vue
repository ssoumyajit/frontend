<template>
  <v-app>
    <div>
            <nuxt-child/>

            <v-main>
              <v-container fill-height>
                  <div class="text-center font-weight-bold">{{artist.artist_name}}</div>
                <v-layout align-center justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center" align="center">
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/work`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/artists/${artist.id}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>
                        <!--Conditional Template Rendering-->
                        <!--https://forum.vuejs.org/t/check-if-variable-is-set-v-if/12738-->
                        
                    </v-flex>
                </v-layout>
              </v-container>
            </v-main>
    </div>

  </v-app>
</template>

<script>
export default {
  props: ['artist','myteacher'],
}
</script>