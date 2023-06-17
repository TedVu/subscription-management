import { defineStore } from "pinia";
export const useSubscriptionItemStore = defineStore("subscription-item", {
    state: () => ({
        /** @type {{id: string, title:string, date: string, imageUrl: string}[]} */
        subscriptionItems: [],
    }),
    getters: {},
    actions: {
        remove(id: string) {
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
