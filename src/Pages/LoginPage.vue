<script setup lang="ts">
import { useAuthenticationStore } from "../stores/AuthenticationStore";

import HeaderComponent from "../components/HeaderComponent.vue";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "vue-router";

const provider = new GoogleAuthProvider();

const auth = getAuth();

const router = useRouter();

const handleLogin = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      const store = useAuthenticationStore();
      store.login();

      router.push("/home");
    })
    .catch(() => {
      console.error("Something went wrong during authentication");
    });
};
</script>

<template>
  <HeaderComponent />
  <v-btn :width="300" :height="50" variant="outlined" @click="handleLogin">
    <v-img
      :width="300"
      :height="50"
      cover
      src="../../assets/signin.png"
    ></v-img>
  </v-btn>
</template>
