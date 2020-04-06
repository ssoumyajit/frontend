<template>
    <v-app>
        <v-form v-on:submit.prevent="submitForm">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model = "title"
                            label="Title">
                            
                        </v-text-field>
                        <p>Title of the event is : {{ title }}</p>

                    </v-col>
                   
                </v-row>
                <!-- <v-btn class="mr-4" @click="submit">submit</v-btn> -->
                <v-btn class="mr-4" @click="submitForm">submit</v-btn>
            </v-container>
        </v-form>
    </v-app>
</template>
<script>
import EventService from '@/services/EventService.js'
export default {
    head() {
        return {
            title: "Create your profile"
        };
    },
    data() {
        return {
            title: "", 
        };
    },
    methods: {
        submitForm() {
            this.$axios
            .post('/events/', {
                title: this.title
            })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            }
            )

        }
        
    }
}
</script>