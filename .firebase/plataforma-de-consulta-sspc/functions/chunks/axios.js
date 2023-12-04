import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import axios from "axios";
const firebaseConfig = {
  apiKey: "AIzaSyDaoQhKSrGoUuVkpkpIL0gtRHYHDSceJi8",
  authDomain: "plataforma-de-consulta-sspc.firebaseapp.com",
  projectId: "plataforma-de-consulta-sspc",
  storageBucket: "plataforma-de-consulta-sspc.appspot.com",
  messagingSenderId: "90481022126",
  appId: "1:90481022126:web:f08616564f86416851493f",
  measurementId: "G-VFQX5GYJB8"
};
try {
  var app = initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
getFirestore(app);
axios.defaults.headers.post["Content-Type"] = "application/json";
