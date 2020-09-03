<template>
    <v-app>
        <v-main>
              <v-container fill-height>
                <v-layout justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center" align = "center">
                          <v-btn color="error" rounded outlined class="text-capitalize" :to= "`/create/about/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/create/work/`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/create/each1teach1/`">Each 1 Teach 1 </v-btn>
                        </div>
                        <br>
                        <hr>

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
                        
                            
                        <!--<v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>-->

                    </v-flex>
                </v-layout>
                
              </v-container>
            </v-main>
    </v-app>
</template>