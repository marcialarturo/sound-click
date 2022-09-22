// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAdZYDPPvz-YWPGq4DhlQIhUDdraUwyFI",
  authDomain: "buy-nothing-projec.firebaseapp.com",
  projectId: "buy-nothing-projec",
  storageBucket: "buy-nothing-projec.appspot.com",
  messagingSenderId: "186058339500",
  appId: "1:186058339500:web:c3518b88d14d73edf95b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fstore = getFirestore(app);
