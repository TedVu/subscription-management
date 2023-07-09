import { defineStore } from "pinia";
import { useFirebaseDataStore } from "../firebase";
import {
    Timestamp,
    collection,
    doc,
    getDocs,
    deleteDoc,
} from "firebase/firestore";
import { Card } from "../components/types";

export const useSubscriptionItemStore = defineStore("subscription-item", {
    state: () => ({
        subscriptionItems: [] as Card[],
    }),
    getters: {},
    actions: {
        remove(id: string) {
            // delete
            // refresh
            console.log(`do something ${id}`);
            const { db } = useFirebaseDataStore();
            const docRef = doc(db, "subscriptions", id);
            deleteDoc(docRef).then(() => {
                console.log("Delete successfully");
                this.subscriptionItems = this.subscriptionItems.filter(
                    (item) => item.id !== id
                );
            });
        },
        add() {
            //
        },
        update(id: string) {
            // change
        },
        getSubscriptionItemsFromServer() {
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
                    const id = doc.id;
                    subscriptionItemsDB.push({
                        id: id,
                        title: name,
                        date: date,
                        imageUrl: "",
                    });
                });

                this.subscriptionItems = subscriptionItemsDB;
            });
        },
    },
});
