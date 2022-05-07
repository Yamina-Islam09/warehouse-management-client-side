// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVK7M5jVGmQCVmjs67rWH4GJ0w-8GOU-g",
  authDomain: "assignment-11-2f56a.firebaseapp.com",
  projectId: "assignment-11-2f56a",
  storageBucket: "assignment-11-2f56a.appspot.com",
  messagingSenderId: "926400800137",
  appId: "1:926400800137:web:bb8db21df96b2ea5f46d58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;