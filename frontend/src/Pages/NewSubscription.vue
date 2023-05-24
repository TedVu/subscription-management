<script setup lang="ts">
import Header from "../components/Header.vue";
</script>

<template>
  <Header />
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field label="Subscription name"></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
