import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useAuthenticationStore } from "./stores/AuthenticationStore";
import About from "./Pages/About.vue";
import Home from "./Pages/Home.vue";
import Login from "./Pages/Login.vue";
import NewSubscription from "./Pages/NewSubscription.vue";
import Error from "./Pages/Error.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC85KMacum02NekX0TXG34LIEJRyNoqcW8",
  authDomain: "subscription-management-40f86.firebaseapp.com",
  projectId: "subscription-management-40f86",
  storageBucket: "subscription-management-40f86.appspot.com",
  messagingSenderId: "82518374928",
  appId: "1:82518374928:web:bab204014ff0fa22eea895",
  measurementId: "G-Q5SMF2EPG6",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import * as VueRouter from "vue-router";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresAuth: false, loginPage: true },
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  { path: "/about", component: About, meta: { requiresAuth: true } },
  {
    path: "/new-subcription",
    component: NewSubscription,
    meta: { requiresAuth: true },
  },
  {
    path: "/error",
    component: Error,
    meta: { requiresAuth: false },
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const pinia = createPinia();

createApp(App).use(vuetify).use(router).use(pinia).mount("#app");

const store = useAuthenticationStore();

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth) {
    if (store.isLogin === true) {
      next(true);
    } else {
      next(false);
      router.push("/Error");
    }
  } else {
    next(true);
  }
});
