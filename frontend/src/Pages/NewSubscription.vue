<script setup lang="ts">
import Header from "../components/Header.vue";
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { enAU } from "date-fns/locale";
import { collection, addDoc } from "firebase/firestore";
import { useFirebaseDataStore } from "../firebase";

const name = ref("");
const date = ref(null);
const loading = ref(false);
const snackbar = ref(false);

const nameRules = [
    (name: string) => {
        if (name?.length > 3) return true;

        return "Subscription name must be at least 3 characters.";
    },
];

const submit = async () => {
    loading.value = true;
    const { db } = useFirebaseDataStore();
    const docRef = await addDoc(collection(db, "subscriptions"), {
        name: name.value,
        date: date.value,
    });
    console.log("Document written with ID: ", docRef.id);
    loading.value = false;
    snackbar.value = true;
};
</script>

<template>
    <Header />
    <v-sheet width="300" class="mx-auto">
        <v-form fast-fail validate-on="submit" @submit.prevent="submit">
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

            <v-btn :loading="loading" type="submit" block class="mt-2"
                >Submit</v-btn
            >
        </v-form>
        <v-snackbar v-model="snackbar">
            {{ "Adding new subscription successful!" }}</v-snackbar
        >
    </v-sheet>
</template>
