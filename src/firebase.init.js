// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YswKuQAgZYH2P7i2rEW82JZzzscaPpg",
  authDomain: "my-route-firebase-pro.firebaseapp.com",
  projectId: "my-route-firebase-pro",
  storageBucket: "my-route-firebase-pro.appspot.com",
  messagingSenderId: "158960133167",
  appId: "1:158960133167:web:ed6653ee56b973c536d2da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;