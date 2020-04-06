<template>
    <div>
        <h6 class = "display-1 ma-4 d-flex justify-center ">List of events</h6>
        
        <div class="d-flex flex-wrap">
          <div v-for="event in events" :key ="event.index">
            <EventCard :event="event" ></EventCard>  <!-- can add class = "ma-1 pa-1" -->
          </div>
        </div>
        
    </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
export default {
  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Eventlist -InMyGroove',
      meta: [ 
        {
          hid: 'description',
          name: 'description',
          content: 
              'List of events - InMyGroove'
        }
      ]
    }
  },
  async asyncData({error}) {
    try {
      const response = await EventService.getEvents()
      console.log(response)   //it will print the data fetched to browser from API on the console, helpful for debugging
      return {
        events: response.data,
        
        
      }
    } catch (e) {
        error({statusCode:503, message: "unable to fetch event data at this point"})
    }
  },
  components: {
    EventCard
  }
}
</script>