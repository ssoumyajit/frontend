<template>
    <v-app>
        <v-content>
            <v-container>
                <v-layout>
                    <v-flex>

                        <div class="text-xs-center">
                            <v-btn outlined :to= "`/artists/${artist.id}/`">About</v-btn>
                            <v-btn outlined :to= "`/artists/${artist.id}/sharing`">Sharing</v-btn>
                        </div>
                        <v-btn text :to= "`/artists/${artist.id}`"> back </v-btn>

                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    props: ['artist'],
}
</script>