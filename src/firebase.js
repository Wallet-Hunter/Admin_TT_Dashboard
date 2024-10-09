import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-7b3de.firebaseapp.com",
  projectId: "tutorial-7b3de",
  storageBucket: "tutorial-7b3de.appspot.com",
  messagingSenderId: "993913189521",
  appId: "1:993913189521:web:91bc88acc8751038c9fb30"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
