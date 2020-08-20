<template>
    <main>
        <div class = "col-md-4">
            <form @submit.prevent="submit">
              <div class = "form-group">
                  <label for>Name</label>
                  <input type="text" class="form-control" v-model="receipe.artist_name">
              </div>
              <div class = "form-group">
                  <label for>Country</label>
                  <input type="text" class="form-control" v-model="receipe.country">
              </div>
              <div class = "form-group">
                  <label for>file</label>
                  <input type="file" name = "artist_image" @change = "onFileChange">
              </div>
              <div class = "form-group">
                  <label for>Style</label>
                  <input type="text" class="form-control" v-model="receipe.style">
              </div>
              <div class = "form-group">
                  <label for>Introduction</label>
                  <input type="text" class="form-control" v-model="receipe.bio">
              </div>
              <div class = "form-group">
                  <label for>Biography</label>
                  <input type="text" class="form-control" v-model="receipe.biography">
              </div>
              
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return {
           receipe: {
               artist_name: "",
               country: "",
               style: "",
               artist_image: "",
               bio: "",
               biography: ""
           },
        }
    },
    methods: {
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length) {
                return;
            }
            this.receipe.artist_image = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
        },
        async submit() {
            const config = {
                headers: {"content-type": "multipart/form-data"}
            };
            let formData = new FormData();
            for (let data in this.receipe) {
                formData.append(data, this.receipe[data]);
            }
            try {
                let response = await this.$axios.$post("/v1/portfolio/", formData, config);
                this.$router.push("/");
            } catch (e) {
                console.log(e);
            }
        }        
    }
}
//upload animation 
//https://bezkoder.com/vue-axios-file-upload/
//multiple file upload
//https://gist.github.com/raisiqueira/49cf0646fc50da4370c54e1047a67dcd: so cool
</script>
