<template>
    <v-app>
        <v-content>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <div class="text-xs-center">
                          <v-btn outlined :to= "`/artists/${artist.id}/`">About</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/activities`">Activities</v-btn>
                          <v-btn outlined :to= "`/artists/${artist.id}/each1teach1`">Each 1 Teach 1</v-btn>
                          <nuxt/>
                      </div>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-content>
    </v-app>
</template>

<!--<script>
import EventService from '@/services/EventService.js'
export default {
  async asyncData({error, params}) {
    try {
      let artist_response = await EventService.getArtist(params.id)
      return {
          artist: artist_response.data,  //event ...... NOT events here , dont miss this one..
      }
    } catch (e) {
      error({statusCode:503,  message: e.message})
      }
  },
}
</script>-->