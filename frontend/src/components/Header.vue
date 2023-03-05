<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);

const router = useRouter();

const handleNavigation = (page: String) => {
  if (page == "About") {
    router.push("/about");
  } else {
    router.push("/");
  }
};
</script>

<template>
  <v-card>
    <v-layout>
      <v-app-bar color="info" density="comfortable">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>My Subscription</v-app-bar-title>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/13.jpg"
          title="John Leider"
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
            @click="handleNavigation('About')"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<style></style>
