// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaMBUYlqaFrYpUrEeva7KowiVic2Be8o0",
  authDomain: "private-route-auth-d16b6.firebaseapp.com",
  projectId: "private-route-auth-d16b6",
  storageBucket: "private-route-auth-d16b6.firebasestorage.app",
  messagingSenderId: "793541584767",
  appId: "1:793541584767:web:596636b518171d96addc4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);