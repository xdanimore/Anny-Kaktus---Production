import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { FIREBASE_API_KEY, FIREBASE_APP_ID } from "./api";

const firebaseConfig = {
  //apiKey: import.meta.VITE_FIREBASE_KEY ---> NOT working!
  apiKey: FIREBASE_API_KEY,
  authDomain: "anny-kaktus.firebaseapp.com",
  projectId: "anny-kaktus",
  storageBucket: "anny-kaktus.appspot.com",
  messagingSenderId: "471743892676",
  appId: FIREBASE_APP_ID,
  //appId: import.meta.VITE_FIREBASE_APP_ID ---> NOT working!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(''),
  isTokenAutoRefreshEnabled: true,
})
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const productos = collection(db, "productos");
export const auth = getAuth();
export const storage = getStorage(app);
