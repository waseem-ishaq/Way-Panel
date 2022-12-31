<template>
    <v-container fluid class="container ">
        <v-alert type="error" v-if="showerr"> Invalid Credentails </v-alert>
        <v-card max-width="600" elevation="10" class="rounded-lg mx-auto mt-auto" tile >
                    
                <div class="d-flex flex-column justify-space-between align-center ">
                    <v-img src="../assets/logo.png" class="img mt-8"> </v-img>
                </div>
    
                <div class="d-flex flex-column justify-space-between align-center">
                    <h1>Sign In</h1>
                </div>
                    <div class="d-flex flex-column align-center mt-4">
                        <v-text-field v-model="userName"  color="#48126A" label="Enter User Name" required class="textfield mt-6" prepend-inner-icon="mdi-email" outlined>
                        </v-text-field>
                        <!-- <v-text-field v-model="email" :rules="emailRules" color="#48126A" label="Enter E-mail" required class="textfield mt-6" prepend-inner-icon="mdi-email" outlined>
                        </v-text-field> -->
                        <v-text-field label="Enter Password" color="#48126A" v-model="password"  type="password" required class="textfield" prepend-inner-icon="mdi-lock" outlined>
                        </v-text-field>
                    </div>
                    <div class="d-flex justify-center mt-2 mx-auto" style="width:80%" >
                        <v-row justify="space-between">
                            <!-- <span >
                                <v-checkbox  label="Remeber Me" color="info" value="info" class="mt-0 pt-0" hide-details></v-checkbox>
                            </span> -->
                            <span >
                                
                                <router-link    to="/forget-password" class="text-decoration-none">Forgot Password?</router-link>
                               
                            </span>
                        </v-row>     
                    </div>
                    <div class="d-flex flex-column align-center my-4">
                        <v-btn  color="purple" class="my-2" id="button-signin" @click="login(userName,password)">
                            Sign In
                        </v-btn>
                        <v-btn
                
                color="depressed"
                class="my-4"
                id="button-signup"
                @click.native="$router.push('/sign-up')"
              >
              Sign Up
              
                
              </v-btn>
                    </div>
                
                </v-card>
            
    </v-container>
       
    
    
    </template>
    
    <script>
    
    // import validationRules from '../validation'
    
    
    export default {
      
        name: "SignIn",
        // mixins: [validationRules],
        data: () => ({
            userName: '',
            showerr: false,
            password:'',
            image:'https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000',
            email:'Email',
        }),
    
        methods: {
    login(userName, password) {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          //   username: userData[0],
          //   password: userData[1],
          username: userName,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          const Login_data = json;
          if (Login_data.message == "Invalid credentials") {
            if (
              userName == localStorage.getItem("username") &&
              password == localStorage.getItem("password")
            ) {
              this.$router.push({ path: "/home/dashboard" });
            } else {
              this.showerr = true;
              setTimeout(() => {
                this.showerr = false;
              }, 2000);
            }
          } else {
            localStorage.setItem("username", Login_data.username);
            localStorage.setItem("token", Login_data.token);
            localStorage.setItem("image", Login_data.image);
            localStorage.setItem("firstname", Login_data.firstName);
            localStorage.setItem("lastName", Login_data.lastName);
            localStorage.setItem("email", Login_data.email);
            localStorage.setItem("password", this.password);
            if(localStorage.getItem("image")){
                console.log(localStorage.getItem("image"),"hfgsgfsdhg")
                this.image=localStorage.getItem("image")
            }
            if(localStorage.getItem("email")){
                this.email=localStorage.getItem("email")
            }

            

            
            this.$store.dispatch("login", [
              userName,
              this.email,
              this.password,
              this.image
            ]);
            this.$router.push({ path: "/home/dashboard" });
            // localStorage.setItem("password", Login_data.password);
          }
        });
    },
  },
    };
    </script>
    
    <style scoped>
    .container {
      background: linear-gradient(90deg, rgba(72,18,106,1) 0%, rgba(226,187,187,1) 50%, rgba(72,18,106,1) 100%);
      height: 100%;  
    }
    
    .img {
        height: 100px;
        width: 200px;
    }
    
    .checkbox {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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