// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-474a3.firebaseapp.com",
  projectId: "mern-auth-474a3",
  storageBucket: "mern-auth-474a3.appspot.com",
  messagingSenderId: "890975497186",
  appId: "1:890975497186:web:24fdedb8d7d16784fd67bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);