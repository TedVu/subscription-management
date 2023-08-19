<script lang="ts" setup>
import { Card } from "./types";
import { PropType, ref, onMounted } from "vue";
import { enAU } from "date-fns/locale";
import { useSubscriptionItemStore } from "../stores/SubscriptionItemsStore";

const snackbar = ref(false);
const deleteDialog = ref(false);
const detailsDialog = ref(false);

const props = defineProps({
  card: { type: Object as PropType<Card>, default: null },
});

const handleDelete = () => {
  //delete
  const store = useSubscriptionItemStore();
  store.remove(props.card.id);
  snackbar.value = true;
  deleteDialog.value = false;

  setTimeout(() => {
    snackbar.value = false;
  }, 3000);
};

const nameRules = [
  (name: string) => {
    if (name?.length >= 3) return true;

    return "Subscription name must be at least 3 characters.";
  },
];

const initialDateStr = (dateStr: string) => {
  const dateStrSegment = dateStr.split("/");

  return `${dateStrSegment[2]}-${dateStrSegment[1]}-${dateStrSegment[0]}`;
};

onMounted(() => {
  console.log(`Date is ${JSON.stringify(props.card.date)}`);
});

const name = ref(props.card.title);
const date = ref(new Date(initialDateStr(props.card.date)));
const images = ref([]);
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
      <v-btn color="success">
        Update
        <v-dialog v-model="detailsDialog" activator="parent" width="auto">
          <v-card>
            <v-card-text>
              <v-form fast-fail validate-on="blur">
                <v-text-field
                  v-model="name"
                  label="Subscription name"
                  :rules="nameRules"
                />
                <VueDatePicker
                  v-model="date"
                  :enable-time-picker="false"
                  :format-locale="enAU"
                  :clearable="true"
                  placeholder="Select Date"
                  required
                  format="dd/MM/yyyy"
                />
                <v-file-input
                  v-model="images"
                  accept="image/png, image/jpeg, image/gif"
                  label="File input"
                  class="mt-5"
                  prepend-icon="mdi-camera"
                ></v-file-input>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="success" @click="handleDelete"> Update </v-btn>
              <v-btn color="primary" @click="detailsDialog = false"
                >Cancel</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
      <v-btn color="red">
        Delete
        <v-dialog v-model="deleteDialog" activator="parent" width="auto">
          <v-card>
            <v-card-text>
              Are you sure you want to delete this subscription?
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" @click="handleDelete"> Delete </v-btn>
              <v-btn color="primary" @click="deleteDialog = false"
                >Cancel</v-btn
              >
            </v-card-actions>
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
