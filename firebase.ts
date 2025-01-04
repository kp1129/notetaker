// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH1BnSmopNbbUOPEuRJW252caDEp6ox1A",
  authDomain: "notetaker-ai.firebaseapp.com",
  projectId: "notetaker-ai",
  storageBucket: "notetaker-ai.firebasestorage.app",
  messagingSenderId: "547724435464",
  appId: "1:547724435464:web:514b99f26e5f7cfa4271bd",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
