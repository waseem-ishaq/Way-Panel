import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    userData: {
      userName: "Ali",
      password: "123456",
      email: "ali@gmail.com",
      image:
        "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?w=2000",
    },
  },

  actions: {
    signUp(context, userData) {
      context.commit("signUp", userData);
    },
    login(context, userData) {
      console.log(userData);

      context.commit("login", userData);
    },
    update(context, updateData) {
      context.commit("update", updateData);
    },
  },
  mutations: {
    signUp(state, userData) {
      state.userData.userName = userData[0];
      state.userData.email = userData[1];
      state.userData.password = userData[2];
      state.userData.image = userData[3];
    },
    login(state, userData) {
      console.log(userData, "my data");
      state.userData.userName = userData[0];
      state.userData.email = userData[1];
      state.userData.password = userData[2];
      state.userData.image = userData[3];
    },
    update(state, updateData) {
      state.userData.userName = updateData[0];
      state.userData.password = updateData[1];
      state.userData.email = updateData[2];
      state.userData.image = updateData[3];
    },
  },
});
