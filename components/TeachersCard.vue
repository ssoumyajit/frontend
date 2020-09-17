<template>
  <v-card class = "ma-1 pa-1" hover @mousedown.stop :elevation="5" :to="'/each1teach1/'+ mystudent.token" ><!-- dark -->
    <v-container>
      
        <div>
          <v-img :src="mystudent.s_photo" class="centerImage" width = "200px" height = "300px"/>
          <br>
          <v-btn color="orange" x-small>
            {{ mystudent.s_teacher }}
          </v-btn>
        </div>

    </v-container>
  </v-card>
</template>

<script>
    export default {
      name: 'TeachersCard',
      props: {
        mystudent: Object,
      },
      
    }
</script>

