<template>
    <v-app>
        <h2 class="text-center">{{artist.blog_set}}</h2>
        <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
    
}
</script>