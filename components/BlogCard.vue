<template>
  <v-card width=340px class = "ma-1 pa-1" hover @mousedown.stop :elevation="5" :to="'/blogs/' + blog.id" > <!-- dark -->
    <v-container>
      
        <div>
          <v-img :src = "blog.blog_image" width="100%"/><!-- v-img covers larger area than only img tag -->
          <!-- <v-card-title color = "black" x-small>{{event.title}}</v-card-title> -->
          <v-btn color="orange" x-small>
            {{ blog.blog_name }}
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
      name: 'BlogCard',
      props: {
        blog: Object
      },
      computed: {
        parsedDate() {
          const blogDate = new Date(this.blog.date)
          return blogDate.toDateString()
        }
      }
    }
</script>

