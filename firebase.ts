// lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhQu4Cm9_6s4-T0AIsPS92ilwXbJHdPpA",
  authDomain: "realestate-57b87.firebaseapp.com",
  projectId: "realestate-57b87",
  storageBucket: "realestate-57b87.appspot.com",
  messagingSenderId: "718597394625",
  appId: "1:718597394625:web:59ea900fad8ee603790440",
  measurementId: "G-4B7GVMXH1S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
