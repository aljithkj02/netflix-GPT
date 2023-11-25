// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPFkuQopvptzNiU5qx7Hc2y28VX5Zvpf0",
  authDomain: "netflixgpt-89555.firebaseapp.com",
  projectId: "netflixgpt-89555",
  storageBucket: "netflixgpt-89555.appspot.com",
  messagingSenderId: "22358778094",
  appId: "1:22358778094:web:9764636c0fd3ee58f353ff",
  measurementId: "G-BLZ922Q79K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();