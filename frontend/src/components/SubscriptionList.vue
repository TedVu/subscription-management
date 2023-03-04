<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in 10" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <SubscriptionCard
            title="Twitter Blue"
            :date="new Date('02 Feb 2024')"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
