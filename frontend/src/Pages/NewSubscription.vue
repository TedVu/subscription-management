<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { enAU } from "date-fns/locale";

const name = ref("");
const date = ref(null);
const loading = ref(false);

const nameRules = [
  (name: String) => {
    if (name?.length > 3) return true;

    return "Subscription name must be at least 3 characters.";
  },
];

const submit = async () => {
  // submit to server
};
</script>

<template>
  <Header />
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="name"
        label="Subscription name"
        :rules="nameRules"
      ></v-text-field>
      <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        :format-locale="enAU"
        format="dd/MM/yyyy"
      ></VueDatePicker>

      <v-btn :loading="loading" type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
