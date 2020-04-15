<template>
    <v-app>
        <h2 class="text-center">{{artist.blog_set}}</h2>
        <div>
            <div>
                <h6 class = "display-1 ma-4 d-flex justify-center ">List of Blogs</h6>
                
                <div class = "display-1 ma-4 d-flex justify-center ">
                  <div v-for="blog in blogs" :key ="blog.index">
                    <BlogCard :blog="blog" ></BlogCard>  <!-- can add class = "ma-1 pa-1" -->
                  </div>
                </div>
                
            </div>
        </div>
        <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
import EventService from '@/services/EventService.js'
import BlogCard from '@/components/BlogCard.vue'

export default {
    props: ['artist'],
    async asyncData({error, params}) {
      try {
        let blogs_response = await EventService.getBlogs()

        return {
            blogs: blogs_response.data
        }
      } catch (e) {
        error({statusCode:503,  message: err.message})
        }
    },
    
    components: {
        BlogCard
    }

    
}
</script>