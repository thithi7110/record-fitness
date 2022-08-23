// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6qgalH4qkmZbhPtapl5gpzXFZDpClfXE",
  authDomain: "record-fitness-e5d6c.firebaseapp.com",
  projectId: "record-fitness-e5d6c",
  storageBucket: "record-fitness-e5d6c.appspot.com",
  messagingSenderId: "1014285009937",
  appId: "1:1014285009937:web:84d7db5bf6bb406a09ddb0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();