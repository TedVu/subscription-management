<script setup lang="ts">
import SubscriptionCard from "./SubscriptionCard.vue";
import { Card } from "./types";
import { PropType } from "vue";
// Moment
import moment from "moment";

const props = defineProps({
  subscriptionItem: Array as PropType<Card[]>,
});
</script>

<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in 10" :key="n" cols="12" sm="4">
        <v-sheet class="ma-2 pa-2">
          <SubscriptionCard
            :card="{
              title: 'Youtube',
              date: moment('02-02-2023').format('DD-MM-YYYY'),
              imageUrl: '',
            }"
          />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
