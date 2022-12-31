<template>
     <v-container fluid class="container ">
      <v-alert type="success"  v-if="showmes">
      User Registered Succssfully
    </v-alert>
    <v-alert type="danger"  v-if="error">
      Empty Data!
    </v-alert>
        
        <v-card  max-width="600" elevation="10" class="rounded-lg mx-auto  " tile >
          <v-form ref="form" v-model="valid" lazy-validation class="form">
                <div class="d-flex flex-column justify-space-between align-center ">
                    <v-img max-width="100" src="../assets/logo.png" class="img mt-8"> </v-img>
                </div>
    
                <div class="d-flex flex-column justify-space-between align-center">
                    <h1>Sign Up</h1>
                </div>
                <div class="d-flex flex-column align-center">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                color="#48126A"
                label="Enter Full Name"
                required
                class="textfield mt-6"
                prepend-inner-icon="mdi-account"
                outlined
                dense
              >
              </v-text-field>
              <v-text-field
                label="Enter E-mail"
                color="#48126A"
                v-model="email"
                :rules="emailRules"
                required
                dense
                class="textfield"
                prepend-inner-icon="mdi-email"
                outlined
              >
              </v-text-field>
              <v-text-field
                label="Enter Password"
                color="#48126A"
                v-model="password"
                :rules="passwordRules"
                type="password"
                required
                class="textfield"
                prepend-inner-icon="mdi-lock"
                outlined
                dense
              >
              </v-text-field>
              <v-text-field
                label="Confirm Password"
                v-model="cpassword"
                :rules="confirmPasswordRules"
                type="password"
                required
                class="textfield"
                color="#48126A"
                prepend-inner-icon="mdi-lock"
                outlined
                dense
              ></v-text-field>
            </div>
            <!-- <div class="d-flex justify-center mx-auto">
              <span class="mx-auto">
                <v-checkbox
                  
                  label="Terms and Conditions."
                  color="info"
                  v-model="checkbox"
                  class="mt-0 pt-0"
                  hide-details
                ></v-checkbox>
              </span>
            </div> -->
            <div class="d-flex flex-column align-center mt-4">
              <v-btn
                :disabled="!valid && checkbox==false"
                color="#48126A"
                id="button-signin"
                @click="register(), validate()"
              >
                Sign Up
              </v-btn>
              <v-btn
                
                color="depressed"
                class="my-4"
                id="button-signup"
                @click.native="$router.push('/')"
              >
              Sign In
              
                
              </v-btn>
            </div>
                </v-form>
                </v-card>
            
    </v-container>
     
    
  </template>
  
  <script>
  import validationRules from '../validation'
  export default {
    name: "SignUp",
    data: () => ({
    showmes: false,
    name: "",
    email: "",
    password: "",
    cpassword: "",
    checkbox: false,
    error: false,
    image:'',
  }),
    mixins: [validationRules],
  
    methods: {
    register() {
      if(
      this.name == "" &&
        this.email == "" &&
        this.password == "" &&
        this.cpassword == ""){
          this.error=true
        setTimeout(() => {
          this.error=false;
      }, 800);
      }
      console.log(this.name);
      localStorage.setItem("username", this.name);
      
      localStorage.setItem(
        "image",
        "https://www.w3schools.com/howto/img_avatar.png"
      );
      this.image=localStorage.getItem(
        "image",
      );
      localStorage.setItem("password", this.password);
      localStorage.setItem("email", this.email);
     
      if (this.name != "" && this.password != "" && this.email != "") {
        this.showmes = true;
      console.log(this.showmes);
      setTimeout(() => {
        this.showmes = false;
      }, 2000);
        localStorage.setItem("token", "true");
        setTimeout(() => {
          this.$router.push({ path: "/" });
      }, 2000);
        
      }
      this.$store.dispatch("signUp",[localStorage.getItem("username"),localStorage.getItem("email"), localStorage.getItem("password"),this.image])
    },
  },
  
    
  
    
  };
  </script>
  
  <style scoped>
  .container {
      background: linear-gradient(90deg, rgba(72,18,106,1) 0%, rgba(226,187,187,1) 50%, rgba(72,18,106,1) 100%);

      height: 100%; 
       
    }
    h1 {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    }
    h3 {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        color: dimgray;
    }
    
    
    
    
    
    
    
    
    #button-signin {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        width: 50%;
        color: white;
        font-weight: bold;
    }
    
    #button-signup {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        width: 50%;
        color: #48126A;
        font-weight: bold;
    }
    
    #button-signup:hover {
        border: 1px #48126A solid;
    }
    
    .textfield {
        width: 80%;
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; 
    }  
 
  </style>