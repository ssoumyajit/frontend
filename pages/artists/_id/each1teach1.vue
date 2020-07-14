<template>
    <v-app>
        <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
}
</script>