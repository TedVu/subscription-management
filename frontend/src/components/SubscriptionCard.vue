<script setup lang="ts">
const props = defineProps({
  title: String,
  date: Date,
  imageUrl: String,
});
</script>

<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="align-end text-black"
      height="200"
      width="350"
      src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
      cover
    >
      <v-card-title>{{ title }}</v-card-title>
    </v-img>
    <v-card-text>
      <div>Subscribed on {{ date }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange"> Details </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style></style>
