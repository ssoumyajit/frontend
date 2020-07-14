<template>
    <v-app>
        <h2>Hi</h2>
        <!--<h2 class="text-center">{{artist.artist_name}}</h2>-->
        <v-btn text :to="`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
}
</script>