<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "../stores/AuthenticationStore";

const drawer = ref(false);

const router = useRouter();

const store = useAuthenticationStore();

const handleNavigation = (page: string) => {
  if (page === "About") {
    router.push("/about");
  } else if (page === "NewSubcription") {
    router.push("/new-subcription");
  } else if (page === "Home") {
    router.push("/home");
  } else {
    if (page === "Logout") {
      store.logout();
    }
    router.push("/");
  }
};
</script>

<template>
  <v-layout>
    <v-app-bar color="info" density="comfortable">
      <v-app-bar-nav-icon
        v-if="store.isLogin === true"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Subscription Management Application</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://tedvublogimages.s3.us-west-1.amazonaws.com/profilepics.jpg"
        title="Ted Vu"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
          @click="handleNavigation('Home')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="about"
          @click="handleNavigation('About')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="New Subscription"
          value="New Subscription"
          @click="handleNavigation('NewSubcription')"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value="Logout"
          @click="handleNavigation('Logout')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style></style>
