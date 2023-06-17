<script setup lang="ts">
import { onMounted, ref } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { Card } from "../components/types";
import SubscriptionList from "../components/SubscriptionList.vue";
import { useFirebaseDataStore } from "../firebase";
import { Timestamp, collection, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

const subscriptionItems = ref<Card[]>();
onMounted(() => {
  const { db } = useFirebaseDataStore();
  const colRef = collection(db, "subscriptions");

  const subscriptionItemsDB: Card[] = [];
  getDocs(colRef).then((snapshots) => {
    snapshots.docs.forEach((doc) => {
      const date = new Timestamp(
        doc.data().date.seconds,
        doc.data().date.nanoseconds
      )
        .toDate()
        .toLocaleDateString("en-AU");

      const name = doc.data().name;
      subscriptionItemsDB.push({
        id: uuidv4(),
        title: name,
        date: date,
        imageUrl: "",
      });
    });

    subscriptionItems.value = subscriptionItemsDB;
  });
});
</script>

<template>
  <HeaderComponent />
  <SubscriptionList :subscription-items="subscriptionItems" />
</template>
