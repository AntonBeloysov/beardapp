import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDwTWGKsd1yYvPaG0pM09qpujcR_WBl1bQ",
  authDomain: "beard-ea459.firebaseapp.com",
  projectId: "beard-ea459",
  storageBucket: "beard-ea459.appspot.com",
  messagingSenderId: "593599694230",
  appId: "1:593599694230:web:62346149102db048c249b7",
  measurementId: "G-WZTR5L23WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

export default db;
