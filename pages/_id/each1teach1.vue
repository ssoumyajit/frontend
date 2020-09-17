<template>
    <v-app>
        <div>
            <nuxt-child/>

            <v-main>
              <v-container fill-height>
                  <div class="text-center font-weight-bold">{{artist.artist_name}}</div>
                <v-layout align-center justify-center>
                    <v-flex xs6>

                        <div class="text-xs-center" align="center">
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/`">About</v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/work`"> Work </v-btn>
                          <v-btn rounded outlined class="text-capitalize" :to= "`/${artist.id}/each1teach1`">Each 1 Teach 1 </v-btn>
                        </div>
                        <!--Conditional Template Rendering-->
                        <!--https://forum.vuejs.org/t/check-if-variable-is-set-v-if/12738-->
                        
                    </v-flex>
                </v-layout>
              </v-container>
            </v-main>

            <div v-if="artist.mystudent.length > 0">
                <div class="text font-weight-light">
                    People who have taught me/influenced me 
                    <hr>
                </div>

                <div class="d-flex flex-wrap">
                    <div v-for = "mystudent in artist.mystudent" :key = "mystudent.index">
                       <TeachersCard :mystudent="mystudent" ></TeachersCard>
                       <!--bind the prop, "teacher" object (in studentCard component) with teacher iterator in for loop--> 
                    </div>
                </div>
            </div>
            
            <br>

            <div v-if="artist.myteacher.length > 0">
                <div class="text font-weight-light">
                    My students
                    <hr>
                </div>
            
                <div class="d-flex flex-wrap">
                    <div v-for = "myteacher in artist.myteacher" :key = "myteacher.index">
                       <StudentsCard :myteacher="myteacher" ></StudentsCard>
                       <!--bind the prop, "teacher" object (in studentCard component) with teacher iterator in for loop--> 
                    </div>
                </div>
            </div>

            <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>
    
            </div>
    </v-app>
</template>


<script>
import StudentsCard from '@/components/StudentsCard.vue'
import TeachersCard from '@/components/TeachersCard.vue'


export default {
    //props: ['artist']
    props: ['artist', 'myteacher'],
    components: {
        StudentsCard,
        TeachersCard
    },
}
</script>


