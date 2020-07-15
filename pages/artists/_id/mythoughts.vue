<template>
    <v-app>
        <h2> Deep Thoughts</h2>
        <div class="d-flex flex-wrap" v-for="thought in artist.thought" :key = "thought.index">
            <ThoughtCard :thought="thought"></ThoughtCard>
        </div> 
        <!--<h2 class="text-center">{{artist.artist_name}}</h2>-->
        <v-btn text :to="`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
import ThoughtCard from '@/components/ThoughtCard.vue'
export default {
    props: ['artist'],
    components: {
        ThoughtCard
    },
}
</script>
