import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export { initFirebase, useFirebaseDataStore };
