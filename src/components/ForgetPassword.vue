<template>
<div class="main-div">
    <v-container>
        <div>
            <v-card max-width="600" elevation="10" class="mx-auto my-12 rounded-lg" tile >
                <div class="d-flex flex-column align-center mt-4">
                    <v-img src="../assets/lock.png" class="mt-4" width="50" height="50"></v-img>
                    <h2>Trouble Logging In?</h2>
                    <p class="font-weight-light">
                        Enter your email and we'll send you <br />a link to get back into your account.
                    </p>

                    <v-text-field v-model="email" :rules="emailRules" color="#48126A" label="Enter E-mail" required class=" textfield" prepend-inner-icon="mdi-email" outlined></v-text-field>

                    <div style="width: 80%;">
                        <v-row justify="space-between">
                            <v-col>
                                <v-btn color="#48126A" id="button-signin">
                                    <router-link    to="/reset-password" class="white--text text-decoration-none">Reset Password</router-link> 
                                    </v-btn>
                            </v-col>

                            <v-col class="text-center">
                                <v-row wrap no-gutters>
                                    <v-col class="text-center">
                                        <v-divider vertical />
                                    </v-col>
                                    <v-col class="text-center"> Or </v-col>
                                    <v-col class="text-center">
                                        <v-divider vertical />
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col>
                                <router-link    to="/sign-up" class="text-decoration-none">Create account</router-link>
                            </v-col>
                        </v-row>
                        <div class="d-flex flex-column align-center mt-6">
                            <p>Return to <router-link    to="/" class="text-decoration-none">LogIn</router-link></p> 
                        </div>
                    </div>
                </div>

            </v-card>
        </div>
    </v-container>

</div>
</template>

<script>
export default {

    name: "ForgetPassword",
    data: () => ({

    }),

};
</script>

<style scoped>
.main-div {
    background: linear-gradient(90deg, rgba(72, 18, 106, 1) 0%, rgba(226, 187, 187, 1) 50%, rgba(72, 18, 106, 1) 100%);
    height: 100vh;
    /* width: 100%;
     background-size: cover;
    background: url("../assets/bg-01.jpg") no-repeat center center fixed ;
    transform: scale(1.1); */
}

.box {
    width: 40%;
    border-radius: 10px;
    border: transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: white;
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
