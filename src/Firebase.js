// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUowr-aZDqkok_2hL6sBcYWvpPWKHmNOs",
  authDomain: "fir-project-bed2b.firebaseapp.com",
  projectId: "fir-project-bed2b",
  storageBucket: "fir-project-bed2b.appspot.com",
  messagingSenderId: "680567357872",
  appId: "1:680567357872:web:d5b9001d9f86d2e9149675",
  measurementId: "G-H39KCV77RC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;

export const db = getFirestore(app)