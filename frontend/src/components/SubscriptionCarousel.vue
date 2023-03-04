<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
</script>

<template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <SubscriptionCard
            title="Twitter Blue"
            :date="new Date('02 Feb 2024')"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>

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
