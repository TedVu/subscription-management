import { defineStore } from "pinia";
import { buildUniqueFilename } from "../services/FileService";
import { useFirebaseDataStore, getSubscriptionImageUrl } from "../firebase";
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
            const { db } = useFirebaseDataStore();
            const docRef = doc(db, "subscriptions", id);
            deleteDoc(docRef).then(() => {
                this.subscriptionItems = this.subscriptionItems.filter(
                    (item) => item.id !== id
                );
            });
        },
        add() {
            // TO BE IMPLEMENTED
        },
        update(id: string) {
            // TO BE IMPLEMENTED
        },
        getSubscriptionItemsFromServer() {
            this.subscriptionItems = [];
            const { db } = useFirebaseDataStore();
            const colRef = collection(db, "subscriptions");
            getDocs(colRef).then((snapshots) => {
                snapshots.docs.forEach(async (doc) => {
                    const date = new Timestamp(
                        doc.data().date.seconds,
                        doc.data().date.nanoseconds
                    )
                        .toDate()
                        .toLocaleDateString("en-AU");

                    const name = doc.data().name;
                    const id = doc.id;

                    const storageLocation = `images/${buildUniqueFilename(
                        name,
                        new Timestamp(
                            doc.data().date.seconds,
                            doc.data().date.nanoseconds
                        ).toDate()
                    )}.${doc.data().imageExtension}`;
                    const imageUrl = await getSubscriptionImageUrl(
                        storageLocation
                    );
                    this.subscriptionItems.push({
                        id: id,
                        title: name,
                        date: date,
                        imageUrl: imageUrl,
                    });
                });
            });
        },
    },
});
