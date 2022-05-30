// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlzJbWww0EnKchAdHvPRJgtqEYfujdlmw",
    authDomain: "algomonk-ui.firebaseapp.com",
    projectId: "algomonk-ui",
    storageBucket: "algomonk-ui.appspot.com",
    messagingSenderId: "661469345307",
    appId: "1:661469345307:web:ef229e95269dc12e8faabe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;