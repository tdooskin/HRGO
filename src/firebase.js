// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6JxpyiVuNt76EFjrrqa1SVfli5-VK_ec",
  authDomain: "hello-world-365513.firebaseapp.com",
  projectId: "hello-world-365513",
  storageBucket: "hello-world-365513.appspot.com",
  messagingSenderId: "940597021301",
  appId: "1:940597021301:web:8f2d2422a8163ad031463c",
  measurementId: "G-M3YL943GSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
