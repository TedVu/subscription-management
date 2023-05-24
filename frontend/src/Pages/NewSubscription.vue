<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { enAU } from "date-fns/locale";

const date = ref();
</script>

<template>
  <Header />
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent>
      <v-text-field label="Subscription name"></v-text-field>
      <VueDatePicker
        v-model="date"
        :enable-time-picker="false"
        :format-locale="enAU"
        format="dd/MM/yyyy"
      ></VueDatePicker>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
