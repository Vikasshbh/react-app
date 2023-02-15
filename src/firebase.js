//  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu16abaufvqK21kwVf2Fh0hHeVX-KTGj0",
  authDomain: "react-app-868b8.firebaseapp.com",
  projectId: "react-app-868b8",
  storageBucket: "react-app-868b8.appspot.com",
  messagingSenderId: "508084286355",
  appId: "1:508084286355:web:7ea7796b9caf1f424fee66",
  measurementId: "G-XMEQ22M3NZ",
  databaseURL: "https://react-app-868b8-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;