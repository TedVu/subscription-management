import { defineStore } from "pinia";
export const useSubscriptionItemStore = defineStore("subscription-item", {
    state: () => ({
        /** @type {{title:string, date: string, imageUrl: string}[]} */
        subscriptionItems: [],
    }),
    getters: {},
    actions: {
        remove() {
            //
        },
        add() {
            //
        },
        update() {
            //
        },
    },
    persist: true,
});
