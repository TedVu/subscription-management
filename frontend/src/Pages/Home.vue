<script setup lang="ts">
import { onMounted, ref } from "vue";
import Header from "../components/Header.vue";
import { Card } from "../components/types";
import SubscriptionList from "../components/SubscriptionList.vue";
import moment from "moment";

const subscriptionItems = ref<Card[]>();
onMounted(() => {
  subscriptionItems.value = [
    {
      title: "Youtube",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
    {
      title: "Twitch",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
    {
      title: "Twitch",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
    {
      title: "Twitch",
      date: moment("02-02-2023").format("DD-MM-YYYY"),
      imageUrl: "",
    },
  ];
});
</script>

<template>
  <Header />
  <SubscriptionList :subscription-items="subscriptionItems" />
</template>
