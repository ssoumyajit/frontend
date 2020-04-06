<template>
  <v-app>
    <div>
        <nuxt-child :event="event"/>
        <h2 class="text-center">{{event.title}}</h2>
        <v-content>
          <!--- pick-up screen height so we can center vertically -->
          <v-container fill-height>
              <!--- vertical and horizontal alignment -->
              <v-layout align-center justify-center>
                  <v-flex xs6>
                  <!--- v-flex is centered now, but we need to center button inside v-flex -->
                      <div class="text-xs-center">
                          <v-btn outlined :to= "`/events/${event.id}/archive`">Archive</v-btn>
                      </div>
                  </v-flex>
              </v-layout>
          </v-container>
        </v-content>
        
        <center>
           <img :src="event.event_image" height = "45%" width="45%" class="centerImage">
        </center>
        
        <div><p class="text-center">{{ event.event_about}}</p></div>
        

    </div>
    <div>
        <!-- I want to bring the data from artist's api to here -->
    </div>
  </v-app>
</template>

<script>
//import EventNavBar from '@/pages/event/_id/EventNavBar.vue'
import EventService from '@/services/EventService.js'
export default {
    //props: ['event'],
    head() {
        return {
            title: this.event.id,     //do not miss "this"
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'What you need to know about Event #' + this.event.title
                }
            ]
        }
    },
    async asyncData({error, params}) {
      try {
        const response = await EventService.getEvent(params.id)
        return {
        event: response.data   //event ...... NOT events here , dont miss this one..
        }
      } catch (e) {
        error({statusCode:503, message: "unable to fetch data for event#"  + params.id })
        }
    },
}

</script>
