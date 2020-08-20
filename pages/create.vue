<template>
    <v-app>
        <div >We already have prepared an intuitive template for your webite. <br>
             You can preview it while uploading the information. <br>
             Time to upload contents, let's go.
             <hr>
        </div>
        <v-form v-on:submit.prevent="submitForm">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field
                            v-model = "artist_name"
                            label="Your Name">
                            
                        </v-text-field>
                        <!--<p> Your name is : {{ artist_name }}</p>-->
                        <v-text-field
                            v-model = "country"
                            label="Country">
                            
                        </v-text-field>
                        <v-text-field
                            v-model = "style"
                            label=" Dance Style">
                            
                        </v-text-field>
                        <v-text-field
                            v-model = "bio"
                            label="A short Introduction">
                            
                        </v-text-field>
                        <v-file-input 
                            v-model = "artist_image"
                            placeholder = "upload cover photo"
                            label="Cover photo">
                        </v-file-input>

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
            artist: {
                artist_name: "",
                country: "",
                style: "",
                bio:"",
                artist_image:"",
                //files: [], for multiple files
            }
            
        };
    },
    
    methods: {
        submitForm() {
            let formData = new FormData();
            for (let data in this.artist) {
                formData.append(data, this.artist[data])
            }
            this.$axios
            .post('/v1/portfolio/', {
                artist_name: this.artist_name,
                country:this.country,
                style:this.style,
                bio:this.bio,
                artist_image:this.artist_image

            },
            {
                headers: { "content-type": "multipart/form-data" }
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
//https://stackoverflow.com/questions/43013858/how-to-post-a-file-from-a-form-with-axios
//https://stackoverflow.com/questions/55099403/problems-sending-input-file-from-vue-js-to-django-with-django-rest-framework
</script>
