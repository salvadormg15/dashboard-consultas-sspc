// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// TODO: Move to an env variable
const firebaseConfig = {
    apiKey: "AIzaSyDaoQhKSrGoUuVkpkpIL0gtRHYHDSceJi8",
    authDomain: "plataforma-de-consulta-sspc.firebaseapp.com",
    projectId: "plataforma-de-consulta-sspc",
    storageBucket: "plataforma-de-consulta-sspc.appspot.com",
    messagingSenderId: "90481022126",
    appId: "1:90481022126:web:f08616564f86416851493f",
    measurementId: "G-VFQX5GYJB8"
};

// Initialize Firebase
try {
    var app = initializeApp(firebaseConfig);
} catch (err) {
// we skip the "already exists" message which is
// not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const firestore = getFirestore(app);

export { firestore };