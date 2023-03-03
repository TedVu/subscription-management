<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
</script>

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      ><SubscriptionCard title="Youtube" :date="new Date('02 Feb 2022')"
    /></v-carousel-item>

    <v-carousel-item
      ><SubscriptionCard
        title="Curiosity Stream"
        :date="new Date('02 Feb 2023')"
    /></v-carousel-item>

    <v-carousel-item
      ><SubscriptionCard title="Twitter Blue" :date="new Date('02 Feb 2024')"
    /></v-carousel-item>
  </v-carousel>
  <span class="ops-btn">
    <v-btn variant="flat" color="success"> Add </v-btn>
  </span>

  <v-btn variant="flat" color="error"> Delete </v-btn>
</template>

<style scoped>
.ops-btn {
  margin: 2rem;
}
</style>
