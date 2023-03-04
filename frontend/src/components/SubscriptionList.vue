<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
// Moment
import moment from "moment";

export type SubscriptionItem = {
  title: String;
  date: Date;
  imageUrl: String;
};

const props = defineProps({
  subscriptionItem: Array<SubscriptionItem>,
});
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in 10" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <SubscriptionCard
            title="Twitter Blue"
            :date="moment('02-02-2023').format('DD-MM-YYYY')"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
