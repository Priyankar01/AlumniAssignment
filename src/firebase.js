import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrtdNbTknPJfsF6t9P8_zlJnzF7SIy1oM",
  authDomain: "christalumni-21b5c.firebaseapp.com",
  projectId: "christalumni-21b5c",
  storageBucket: "christalumni-21b5c.appspot.com",
  messagingSenderId: "136295963981",
  appId: "1:136295963981:web:152b83a963f9319e3b6b04",
  measurementId: "G-5TVRPZYMNQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app); 

