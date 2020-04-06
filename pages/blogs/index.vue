<template>
    <div>
        <h6 class = "display-1 ma-4 d-flex justify-center ">In My Groove Blogs</h6>
        
        <div class="d-flex flex-wrap">
          <div v-for="blog in blogs" :key ="blog.index">
            <BlogCard :blog="blog" ></BlogCard>  <!-- can add class = "ma-1 pa-1" -->
          </div>
        </div>
        
    </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
import EventService from '@/services/EventService.js'
export default {
  head() {  //head function (a property of vue-meta), returns an object
    return {
      title: 'Bloglist -InMyGroove',
      meta: [ 
        {
          hid: 'description',
          name: 'description',
          content: 
              'List of blogs published - InMyGroove'
        }
      ]
    }
  },
  async asyncData({error}) {
    try {
      const response = await EventService.getBlogs()
      return {
        blogs: response.data
      }
    } catch (e) {
        error({statusCode:503, message: "unable to fetch blog data at this point"})
    }
  },
  components: {
    BlogCard
  }
}
</script>
