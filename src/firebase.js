import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY || "",
  authDomain: "anny-kaktus.firebaseapp.com",
  projectId: "anny-kaktus",
  storageBucket: "anny-kaktus.appspot.com",
  messagingSenderId: "471743892676",
  appId: import.meta.env.VITE_FIREBASE_ID || "",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const productos = collection(db, "productos");
// export const auth = getAuth();
