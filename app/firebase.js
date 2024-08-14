// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKAZ9HTDMiAJgGM6aJQdTgIRd5XSwV48Y",
  authDomain: "inventory-manager-b5966.firebaseapp.com",
  projectId: "inventory-manager-b5966",
  storageBucket: "inventory-manager-b5966.appspot.com",
  messagingSenderId: "587747237495",
  appId: "1:587747237495:web:2e310b53117d138dd73072",
  measurementId: "G-CYN3EL1NW0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };