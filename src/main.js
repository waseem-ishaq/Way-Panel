import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import route from "./router";
import { store } from "./store";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes: route,

  mode: "history",
});

// router.beforeEach((to, from, next) => {
//   if (
//     to.name !== "SignIn" &&
//     to.name !== "SignUp" &&
//     to.name !== "ForgetPassword" &&
//     to.name !== "ResetPassword" &&
//     !localStorage.getItem("token")
//   )
//     next({ name: "SignIn" });
//   else next();
// });

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
