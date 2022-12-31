import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import DashBoard from "./components/DashBoard";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import UpdateUser from "./components/UpdateUser";

function gaurd(to, from, next) {
  if (localStorage.getItem("token")) {
    next();
  } else {
    next({ name: "SignIn" });
  }
}

export default [
  {
    name: "Home",
    component: Home,
    path: "/home",
    beforeEnter: gaurd,
    children: [
      {
        path: "dashboard",
        component: DashBoard,
        beforeEnter: gaurd,
      },
      {
        path: "update-user",
        component: UpdateUser,
        beforeEnter: gaurd,
      },
    ],
  },

  {
    name: "SignIn",
    component: SignIn,
    path: "/",
  },
  {
    name: "ForgetPassword",
    component: ForgetPassword,
    path: "/forget-password",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "ResetPassword",
    component: ResetPassword,
    path: "/reset-password",
  },
];
