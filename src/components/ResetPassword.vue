<template>
  <div class="main-div">
    <v-container>
      <div>
        <v-card
          max-width="600"
          elevation="10"
          class="mx-auto my-12 rounded-lg"
          tile
        >
          <div class="d-flex flex-column align-center mt-4">
            <h2 class="mt-6 mb-6">Reset Password</h2>

            <v-text-field
              v-model="password"
              :rules="passwordRules"
              color="#48126A"
              label="Enter Password"
              required
              class="textfield"
              prepend-inner-icon="mdi-lock"
              outlined
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :rules="passwordRules"
              color="#48126A"
              label="Confirm Password"
              required
              class="textfield"
              prepend-inner-icon="mdi-lock"
              outlined
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
            ></v-text-field>

            <div style="width: 80%">
              <div class="d-flex flex-column align-center mt-6">
                <v-btn class="mb-6" color="#48126A" id="button-signin"
                  >Reset Password</v-btn
                >
                <p>Return to <router-link    to="/" class="text-decoration-none">LogIn</router-link> </p>
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
  name: "ResetPassword",

  data: () => ({
    value: String,
  }),
};
</script>

<style>
.main-div {
  background: linear-gradient(
    90deg,
    rgba(72, 18, 106, 1) 0%,
    rgba(226, 187, 187, 1) 50%,
    rgba(72, 18, 106, 1) 100%
  );
  height: 100vh;
}

#button-signin {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: white;
  font-weight: bold;
}

#button-signup:hover {
  border: 1px #48126a solid;
}

.textfield {
  width: 80%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
