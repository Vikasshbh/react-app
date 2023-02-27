// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHmZdjw76u1QFI0qGL5EYP-PsSeP0alAA",
  authDomain: "ecommerce-47c07.firebaseapp.com",
  projectId: "ecommerce-47c07",
  storageBucket: "ecommerce-47c07.appspot.com",
  messagingSenderId: "799626472157",
  appId: "1:799626472157:web:2d98b828de35f5a1b88934",
  measurementId: "G-K6YFKJ3XFT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);