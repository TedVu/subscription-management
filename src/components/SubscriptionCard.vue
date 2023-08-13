<script lang="ts" setup>
import { Card } from "./types";
import { PropType, ref } from "vue";
import { useSubscriptionItemStore } from "../stores/SubscriptionItemsStore";

const snackbar = ref(false);
const dialog = ref(false);
const props = defineProps({
  card: { type: Object as PropType<Card>, default: null },
});

const handleDelete = () => {
  //delete
  const store = useSubscriptionItemStore();
  store.remove(props.card.id);
  snackbar.value = true;
  dialog.value = false;

  setTimeout(() => {
    snackbar.value = false;
  }, 3000);
};
</script>

<template>
  <v-card class="mx-auto" max-width="600" min-width="350">
    <v-img
      class="align-end text-black"
      height="200"
      width="600"
      :src="`${card?.imageUrl}`"
      cover
    >
    </v-img>
    <v-card-title>{{ card?.title }}</v-card-title>
    <v-card-text>
      <div>Subscribed on {{ card?.date }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue"> Details </v-btn>
      <v-btn color="red">
        Delete
        <v-dialog v-model="dialog" activator="parent" width="auto">
          <v-card>
            <v-card-text>
              Are you sure you want to delete this subscription ?
            </v-card-text>
            <v-card-actions>
              <v-btn color="red" block @click="handleDelete"> Delete </v-btn>
            </v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
          </v-card>
        </v-dialog>
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-snackbar v-model="snackbar" color="error">
    {{ "Delete a subscription successful!" }}
  </v-snackbar>
</template>

<style></style>
