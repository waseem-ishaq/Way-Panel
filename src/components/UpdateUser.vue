<template>
  
    
    <v-container>
      <v-card
        max-width="500"
        elevation="10"
        class="mx-auto  rounded-lg"
        tile
      >
      <input type="file" ref="uploadImage" accept="image/*" @change="uploadImage" hidden>
        <div class="d-flex flex-column align-center mt-4">
          <h2 class="mt-6 mb-6">Account Settings</h2>

          <div class="mx-10 mb-10 d-flex align-center">
            <div class="me-10" outlined>
              <img
                width="115px"
                class="rounded-circle"
                :src="Image !=='' ? Image : `https://www.w3schools.com/howto/img_avatar.png`"
                alt=""
              />
            </div>
            <div > 
              <div>
                <p class="text-body-2">
                  Upload a picture in <b>JPEG, JPG or PNG</b> format.
                </p>
                <p>{{ this.fileName }}</p>
              </div>
              <div>
                <v-btn
                  color="primary"
                  class="ma-2 white--text"
                  @click="chooseFiles()"
                >
                  Upload
                  <v-icon right dark> mdi-cloud-upload </v-icon>
                </v-btn>
              </div>
            </div>
          </div>

          <v-text-field
            v-model="userName"
            color="#48126A"
            label="User Name"
            required
            class="textfield"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="password"
            color="#48126A"
            label="Password"
            required
            :rules="passwordRules"
            class="textfield"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            color="#48126A"
            label="Email"
            required
            dense
            class="textfield"
            outlined
          ></v-text-field>

          
            <div class="d-flex flex-column align-center ">
              <div>
                <v-btn class="mb-2" color="#48126A" id="button-signin" @click="update()"
                  >Save Change</v-btn
                >
              </div>
              <div>
                <v-btn
                  class="mb-2"
                  color="depressed black--text"
                  id="button-signin"
                  @click="cancel()"
                  >Cancel</v-btn
                >
              </div>
            </div>
          
        </div>
      </v-card>
    </v-container>

</template>

<script>
import validationRules from '../validation'
export default {
  name: "UpdateUser",
  mixins: [validationRules],

  data: () => ({
    userName: localStorage.getItem("username"),
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    Image:localStorage.getItem("image") !=='' ? localStorage.getItem("image") : "https://www.w3schools.com/howto/img_avatar.png" ,
    fileName:"",
  }),
  

  methods:{
    chooseFiles(){
        this.$refs.uploadImage.click();
    },
    uploadImage(e){
                const image = e.target.files[0];
                const reader = new FileReader();
                this.fileName=image.name
                reader.readAsDataURL(image);
                reader.onload = e =>{
                    this.Image = e.target.result;
                    this.showComponent=true
                };
            },
            update(){
              console.log(this.Image)
              localStorage.setItem("image", this.Image)
              localStorage.setItem("username", this.userName)
              localStorage.setItem("password", this.password)
              localStorage.setItem("email", this.email)
this.$store.dispatch("update",[this.userName, this.password, this.email, this.Image])
this.$router.push({ path: "/home/dashboard" });
            },
            cancel(){
             
              

this.$router.push({ path: "/home/dashboard" });
            },
  }
  
};
</script>


