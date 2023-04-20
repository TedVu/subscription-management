// Vue
import { createApp } from "vue";
import App from "./App.vue";
// Pages
import About from "./Pages/About.vue";
import Home from "./Pages/Home.vue";
import Login from "./Pages/Login.vue";
import NewSubscription from "./Pages/NewSubscription.vue";

// Vuetify and styling
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC85KMacum02NekX0TXG34LIEJRyNoqcW8",
  authDomain: "subscription-management-40f86.firebaseapp.com",
  projectId: "subscription-management-40f86",
  storageBucket: "subscription-management-40f86.appspot.com",
  messagingSenderId: "82518374928",
  appId: "1:82518374928:web:bab204014ff0fa22eea895",
  measurementId: "G-Q5SMF2EPG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Vue router
import * as VueRouter from "vue-router";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: "/", name: "Login", component: Login },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  { path: "/about", component: About },
  { path: "/new-subcription", component: NewSubscription },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);

  if (requiresAuth) {
    console.log("this page requires authentication");
    next(true);
  }
});

createApp(App).use(vuetify).use(router).mount("#app");
