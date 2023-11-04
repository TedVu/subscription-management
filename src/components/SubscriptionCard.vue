<script lang="ts" setup>
import { v4 as uuidv4 } from "uuid";
import { Card, UpdatedCard } from "./types";
import { PropType, ref } from "vue";
import { enAU } from "date-fns/locale";
import { useSubscriptionItemStore } from "../stores/SubscriptionItemsStore";
import { doc } from "firebase/firestore";
import { useFirebaseDataStore, updateDoc } from "../firebase";
import { uploadFiles } from "../firebase";

const snackbar = ref(false);
const snackbarColor = ref("");
const snackbarMsg = ref("");
const deleteDialog = ref(false);
const detailsDialog = ref(false);

const props = defineProps({
  card: { type: Object as PropType<Card>, default: null },
});

const initialDateStr = (dateStr: string) => {
  const dateStrSegment = dateStr.split("/");
  return `${dateStrSegment[2]}-${dateStrSegment[1]}-${dateStrSegment[0]}`;
};

const name = ref(props.card.title);
const date = ref(new Date(initialDateStr(props.card.date)));
const images = ref([]);

const nameRules = [
  (name: string) => {
    if (name?.length >= 3) return true;
    return "Subscription name must be at least 3 characters.";
  },
];

const handleDelete = () => {
  const store = useSubscriptionItemStore();
  store.remove(props.card.id);
  snackbar.value = true;
  snackbarColor.value = "error";
  snackbarMsg.value = "Delete a subscription successful!";
  deleteDialog.value = false;

  setTimeout(() => {
    snackbar.value = false;
    snackbarColor.value = "";
    snackbarMsg.value = "";
  }, 3000);
};

const handleUpdate = async () => {
  const { db } = useFirebaseDataStore();
  const docRef = doc(db, "subscriptions", props.card.id);
  let updatedCard: UpdatedCard = {};

  if (name.value) {
    updatedCard.name = name.value;
  }

  if (date.value) {
    updatedCard.date = date.value;
  }

  if (images.value && images.value.length > 0) {
    const imageName = uuidv4();
    updatedCard.imageName = `${imageName}.${(images.value[0] as File)?.name
      .split(".")
      .pop()}`;
    await uploadFiles(images.value[0], updatedCard.imageName);
  }

  try {
    await updateDoc(docRef, updatedCard);
    snackbarColor.value = "success";
    snackbarMsg.value = "Update a subscription successful!";
    snackbar.value = true;
    detailsDialog.value = false;
    setTimeout(() => {
      snackbar.value = true;
      const store = useSubscriptionItemStore();
      // This can be improved by 'separate updating concept' we update
      // fe and be separately
      store.getSubscriptionItemsFromServer();
    }, 2000);
  } catch (e) {
    console.error(e);
  } finally {
    console.log("We do cleanup here");
  }
};
</script>

<template>
  <v-card>
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
        <v-dialog
          v-model="detailsDialog"
          persistent
          activator="parent"
          width="auto"
        >
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
              <v-btn color="success" @click="handleUpdate"> Update </v-btn>
              <v-btn color="primary" @click="detailsDialog = false"
                >Cancel</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>
      <v-btn color="red">
        Delete
        <v-dialog
          v-model="deleteDialog"
          persistent
          activator="parent"
          width="auto"
        >
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
  <v-snackbar v-model="snackbar" :color="snackbarColor">
    {{ snackbarMsg }}
  </v-snackbar>
</template>
