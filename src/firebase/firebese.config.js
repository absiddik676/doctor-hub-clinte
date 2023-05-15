// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5U_Equ3SaFzrV_3pchTQ_Ez2eT_en9M",
  authDomain: "doctor-hub-438fa.firebaseapp.com",
  projectId: "doctor-hub-438fa",
  storageBucket: "doctor-hub-438fa.appspot.com",
  messagingSenderId: "596883172457",
  appId: "1:596883172457:web:11f62250325609d35946f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app