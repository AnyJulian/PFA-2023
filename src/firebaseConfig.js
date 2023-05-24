// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgyLisfH-dMhrXI93rflPd69MbgWKzYrA",
  authDomain: "pfa-loxam.firebaseapp.com",
  projectId: "pfa-loxam",
  storageBucket: "pfa-loxam.appspot.com",
  messagingSenderId: "622589409789",
  appId: "1:622589409789:web:b11555944eca8b9b184194"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);