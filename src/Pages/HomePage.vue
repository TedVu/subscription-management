<script setup lang="ts">
import { onMounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import SubscriptionList from "../components/SubscriptionList.vue";
import { useSubscriptionItemStore } from "../stores/SubscriptionItemsStore";

onMounted(() => {
  const store = useSubscriptionItemStore();
  store.getSubscriptionItemsFromServer();
});
</script>

<template>
  <HeaderComponent />
  <SubscriptionList
    :subscription-items="useSubscriptionItemStore().subscriptionItems"
  />
</template>
