<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '../components/Header.vue';
import { Card } from '../components/types';
import SubscriptionList from '../components/SubscriptionList.vue';
import { useFirebaseDataStore } from '../firebase';
import { Timestamp, collection, getDocs } from 'firebase/firestore';
import moment from 'moment';

const subscriptionItems = ref<Card[]>();
onMounted(() => {
  // fetch from database

  const { db } = useFirebaseDataStore();
  const colRef = collection(db, 'subscriptions');

  const subscriptionItemsDB: Card[] = [];
  getDocs(colRef).then((snapshots) => {
    snapshots.docs.forEach((doc) => {
      const date = new Timestamp(
        doc.data().date.seconds,
        doc.data().date.nanoseconds,
      )
        .toDate()
        .toLocaleDateString('en-AU');

      const name = doc.data().name;
      subscriptionItemsDB.push({
        title: name,
        date: date,
        imageUrl: '',
      });
    });

    subscriptionItems.value = subscriptionItemsDB;
  });
});
</script>

<template>
  <Header />
  <SubscriptionList :subscription-items="subscriptionItems" />
</template>
