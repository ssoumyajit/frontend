<template>
    <v-app>
        <div align="center">
            Tell your story and dance journey.
        </div>
        
        <v-form v-on:submit.prevent="submitForm">
            <v-container>
                
                <v-text-field v-model = "bi_content"
                    label = "Your Biography">
                </v-text-field>
                <v-btn class="mr-4" @click="submitForm">Publish</v-btn>
            </v-container>            
        </v-form>        
    </v-app>
</template>

<script>
export default {
    data() {
        biography: {
            bi_content: ""
        }
    },
    methods: {
        submitForm() {
            this.$axios
            .post('/v1/biography/', {bi_content:this.bi_content},{ headers: {"content-type": "application/json"}})
            .then((response)=> {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
            
        }
    }
    
}
</script>