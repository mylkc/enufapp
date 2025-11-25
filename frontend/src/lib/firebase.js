// frontend/src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnkriWGFR59fuswjYI3zwUsY65twNyKfU",
  authDomain: "enuf-26dda.firebaseapp.com",
  projectId: "enuf-26dda",
  storageBucket: "enuf-26dda.appspot.com",  // <-- FIXED
  messagingSenderId: "757285990176",
  appId: "1:757285990176:web:7c4cab6cb67004b4f73145",
  measurementId: "G-9FXJSH6PNE",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
