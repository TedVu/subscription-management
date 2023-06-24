import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { useAuthenticationStore } from "./stores/AuthenticationStore";
import piniaPluginPersistedState from "pinia-plugin-persistedstate";
import About from "./Pages/AboutPage.vue";
import Home from "./Pages/HomePage.vue";
import Login from "./Pages/LoginPage.vue";
import NewSubscription from "./Pages/NewSubscriptionPage.vue";
import Error from "./Pages/ErrorPage.vue";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "./style.css";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { initFirebase } from "./firebase";

import * as VueRouter from "vue-router";

initFirebase();
const vuetify = createVuetify({
    components,
    directives,
});

const routes = [
    {
        path: "/",
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
        path: "/:pathMatch(.*)*",
        component: Error,
        meta: { requiresAuth: false },
    },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);

createApp(App)
    .component("VueDatePicker", VueDatePicker)
    .use(vuetify)
    .use(router)
    .use(pinia)
    .mount("#app");

router.beforeEach((to, from, next) => {
    const store = useAuthenticationStore();

    const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
    const isLoginPage = to.matched.some((x) => x.meta.loginPage);
    if (requiresAuth) {
        if (store.isLogin === true) {
            next(true);
        } else {
            router.push("/error");
        }
    } else {
        if (isLoginPage) {
            if (store.isLogin === true) {
                router.push("/home");
            } else {
                next(true);
            }
        } else {
            next(true);
        }
    }
});
