import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBJoI7WuycxLHIq_vloXKMyTwar8nbIlo8",
  authDomain: "vibeon-4984c.firebaseapp.com",
  projectId: "vibeon-4984c",
  storageBucket: "vibeon-4984c.appspot.com",
  messagingSenderId: "532333140893",
  appId: "1:532333140893:web:fbbd731abf52803fd2ad74",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
