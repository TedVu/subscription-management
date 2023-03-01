<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
</script>

<template>
  <v-carousel hide-delimiters>
    <v-carousel-item><SubscriptionCard /></v-carousel-item>

    <v-carousel-item><SubscriptionCard /></v-carousel-item>

    <v-carousel-item><SubscriptionCard /></v-carousel-item>
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
