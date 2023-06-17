<script lang="ts" setup>
import { Card } from "./types";
import { PropType } from "vue";

const props = defineProps({
  card: { type: Object as PropType<Card>, default: null },
});

const handleDelete = () => {
  //delete
};
</script>

<template>
  <v-card class="mx-auto" max-width="600">
    <v-img
      class="align-end text-black"
      height="200"
      width="600"
      src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
      cover
    >
      <v-card-title>{{ card?.title }}</v-card-title>
    </v-img>
    <v-card-text>
      <div>Subscribed on {{ card?.date }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue"> Details </v-btn>
      <v-btn color="red" @click="handleDelete"> Delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style></style>
