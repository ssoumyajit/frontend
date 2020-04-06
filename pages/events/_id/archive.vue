
<template>
    <v-app>
        <h2 class="text-center">{{event.title}}</h2>
        <h4 class="text-center">archives 2015 2016 2017 2018</h4>
        <h6 class="text-center">{{event.title}}</h6>
        <v-btn text :to= "`/events/${event.id}`"> back </v-btn>

    </v-app>
</template>   


<script>
//import EventNavBar from '@/pages/event/_id/EventNavBar.vue'
//import EventNavBar from '@/components/EventNavBar.vue'
export default {
    props: ['event'],
}
</script>

<style lang="scss" scoped>
    

</style>