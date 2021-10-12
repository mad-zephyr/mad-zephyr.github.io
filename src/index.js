// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQkkzSNH-ybVeMXn4DJjha-xQxae4KTpA",
  authDomain: "react-quiz-997ae.firebaseapp.com",
  databaseURL: "https://react-quiz-997ae-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-quiz-997ae",
  storageBucket: "react-quiz-997ae.appspot.com",
  messagingSenderId: "402827001651",
  appId: "1:402827001651:web:d3284fdb50bf9bdfec4846",
  measurementId: "G-B2QPP3V0NW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);