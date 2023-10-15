import { FirebaseApp, initializeApp } from "firebase/app";
import {
    DocumentData,
    DocumentReference,
    getFirestore,
    updateDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { Card } from "./components/types";

const firebaseConfig = {
    apiKey: "AIzaSyC85KMacum02NekX0TXG34LIEJRyNoqcW8",
    authDomain: "subscription-management-40f86.firebaseapp.com",
    projectId: "subscription-management-40f86",
    storageBucket: "subscription-management-40f86.appspot.com",
    messagingSenderId: "82518374928",
    appId: "1:82518374928:web:bab204014ff0fa22eea895",
    measurementId: "G-Q5SMF2EPG6",
};
let app: FirebaseApp;

const initFirebase = () => {
    app = initializeApp(firebaseConfig);
};

const updateDocFirestore = (
    docRef: DocumentReference<DocumentData>,
    card: Card
) => {
    console.log(`Updated card in firebase is ${JSON.stringify(card)}`);

    updateDoc(docRef, {
        ...card,
    });
};

const useFirebaseDataStore = () => {
    const db = getFirestore(app);
    return {
        db,
    };
};

const uploadFiles = (file: File, uniqueFilename: string) => {
    const fileExtension = file.name.split(".").pop();
    const fullFilename = `${uniqueFilename}.${fileExtension}`;
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${fullFilename}`);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file);
};

const getSubscriptionImageUrl = (
    storageLocation: string
): Promise<string | void> => {
    const storage = getStorage(app);
    const storageRef = ref(storage, storageLocation);
    // Get the download URL
    return getDownloadURL(storageRef)
        .then((url) => {
            // Insert url into an <img> tag to "download"
            return url;
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case "storage/object-not-found":
                    // File doesn't exist
                    break;

                case "storage/unauthorized":
                    // User doesn't have permission to access the object
                    break;

                case "storage/canceled":
                    // User canceled the upload
                    break;

                case "storage/unknown":
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
};

export {
    initFirebase,
    useFirebaseDataStore,
    uploadFiles,
    updateDocFirestore as updateDoc,
    getSubscriptionImageUrl,
};
