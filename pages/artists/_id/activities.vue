<template>
    <v-app>
        <h2 class="text-center">{{artist.artist_name}}</h2>
        <h6 class = "text-center">{{artist.artist_name}} is from {{artist.country}} and loves doing {{artist.style}}</h6>
        <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
}
</script>