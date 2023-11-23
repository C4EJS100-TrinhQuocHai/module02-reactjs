// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrvAcQdjEL9iYUzKWLvVxGDlBdzueIltk",
    authDomain: "js09-feadc.firebaseapp.com",
    projectId: "js09-feadc",
    storageBucket: "js09-feadc.appspot.com",
    messagingSenderId: "157554350449",
    appId: "1:157554350449:web:897f8c4c5a186126103ed0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);