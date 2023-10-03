<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthenticationStore } from "../stores/AuthenticationStore";

const drawer = ref(false);

const computeActiveState = (item: string) => {
  return item === router.currentRoute.value.path;
};

const router = useRouter();

const store = useAuthenticationStore();

const handleNavigation = (page: string) => {
  switch (page) {
    case "About":
      router.push("/about");
      break;
    case "NewSubcription":
      router.push("/new-subcription");
      break;
    case "Home":
      router.push("/home");
      break;
    default:
      store.logout();
      router.push("/");
      break;
  }
};
</script>

<template>
  <v-layout>
    <v-app-bar color="info" density="comfortable">
      <v-app-bar-nav-icon
        v-if="store.isLogin === true"
        @click.stop="drawer = !drawer"
      />
      <v-app-bar-title>Subscription Management Application</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item
        prepend-avatar="https://tedvublogimages.s3.us-west-1.amazonaws.com/profilepics.jpg"
        title="Ted Vu"
      />

      <v-divider />

      <v-list density="compact" nav>
        <v-list-item
          :active="computeActiveState('/home')"
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
          @click="handleNavigation('Home')"
        />
        <v-list-item
          :active="computeActiveState('/about')"
          prepend-icon="mdi-forum"
          title="About"
          value="about"
          @click="handleNavigation('About')"
        />
        <v-list-item
          :active="computeActiveState('/new-subcription')"
          prepend-icon="mdi-account"
          title="New Subscription"
          value="New Subscription"
          @click="handleNavigation('NewSubcription')"
        />
        <v-list-item
          :active="computeActiveState('/notifications')"
          prepend-icon="mdi-account"
          title="Notifications"
          value="Notifications"
          @click="handleNavigation('NewSubcription')"
        />
        <v-list-item
          prepend-icon="mdi-logout"
          title="Logout"
          value="Logout"
          @click="handleNavigation('Logout')"
        />
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<style></style>