import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

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
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!");
    });
};

export { initFirebase, useFirebaseDataStore, uploadFiles };
