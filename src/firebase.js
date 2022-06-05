import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  setDoc,
  doc,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { FIREBASE_API_KEY, FIREBASE_APP_ID } from "./api";

const firebaseConfig = {
  //apiKey: import.meta.VITE_FIREBASE_KEY ---> NOT working!
  apiKey: FIREBASE_API_KEY,
  authDomain: "anny-kaktus.firebaseapp.com",
  projectId: "anny-kaktus",                   // Objeto para definir la información de la aplicación
  storageBucket: "anny-kaktus.appspot.com",
  messagingSenderId: "471743892676",
  appId: FIREBASE_APP_ID,
  //appId: import.meta.VITE_FIREBASE_APP_ID ---> NOT working!
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);              // Iniciando la aplicación con la data del objeto de arriba
const analytics = getAnalytics(app);                    // Iniciando Analytics
export const db = getFirestore(app);                    // Iniciando Firestore
export const productos = collection(db, "productos");   // Iniciando la colección de productos     |---------------------------------------|
export const usuarios = collection(db, "usuarios");     // Iniciando la colección de usuarios      |-db es el objeto para la base de datos-|
export const carrito = collection(db, "carrito");       // Iniciando la colección de carrito       |---------------------------------------|
export const auth = getAuth();                          // Iniciando Auth
export const storage = getStorage(app);                 // Iniciando Storage

export const saveDoc = async (collectionName, documentName, data) => {
  await setDoc(doc(db, collectionName, documentName), data, { merge: true });
};

export const getCartContent = async () => {
  const userEmail = localStorage.getItem("userEmail");
  // const q = await carrito.where("email", "==", userEmail).get();
  const q = query(carrito, where("buyer", "==", userEmail));
  const cartContent = await getDocs(q);

  let flag = {                        // Se obtiene la información del carrito de un usuario
    state: false,
    docID: "",
  };

  cartContent.forEach((doc) => {
    if (doc.data()) {
      flag.state = true;
      flag.docID = doc.id;
    }
  });

  return flag;
};

export const updateData = async (collection, document, collectionObject) => {
  const docRef = doc(db, collection, document);   // Función para actualizar un documento
  await updateDoc(docRef, collectionObject);
};

export const queryDoc = async (collectionName, documentName) => {
  let queryCollection = doc(db, collectionName, documentName);    // Función para leer un documento
  return await getDoc(queryCollection);
};
