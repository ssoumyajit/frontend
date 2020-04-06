<template>
  <v-card width=340px class = "ma-1 pa-1" hover @mousedown.stop :elevation="5" :to="'/events/' + event.id" > <!-- dark -->
    <v-container>
      
        <div>
          <v-img :src = "event.event_image" width="100%"/><!-- v-img covers larger area than only img tag -->
          <!-- <v-card-title color = "black" x-small>{{event.title}}</v-card-title> -->
          <v-btn color="orange" x-small>
            {{ event.title }}
          </v-btn>
          <v-btn color = "sky " x-small>
            {{ parsedDate }}
          </v-btn>
          <v-btn  icon >
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          
          <!-- <span>{{ event.attendees.length }} attending</span> -->
        </div>
      <!-- </nuxt-link> -->
    </v-container>
  </v-card>
</template>

<script>
    export default {
      name: 'EventCard',
      props: {
        event: Object
      },
      computed: {
        parsedDate() {
          const eventDate = new Date(this.event.date)
          return eventDate.toDateString()
        }
      }
    }
</script>

