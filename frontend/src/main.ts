// Vue
import { createApp } from "vue";
import App from "./App.vue";
// Pages
import About from "./Pages/About.vue";
import Home from "./Pages/Home.vue";
import NewSubscription from "./Pages/NewSubscription.vue";

// Vuetify and styling
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";

// Vue router
import * as VueRouter from "vue-router";

const vuetify = createVuetify({
  components,
  directives,
});

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", component: About },
  { path: "/new-subcription", component: NewSubscription },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

createApp(App).use(vuetify).use(router).mount("#app");
