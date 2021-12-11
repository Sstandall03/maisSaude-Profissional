import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, collection, addDoc, query, where, getDocs, getDoc, deleteDoc, updateDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDgeNuC0Nfmc8QZpBxgZwCUrlTVE4Hz3g",
  authDomain: "saudedb1-34db7.firebaseapp.com",
  projectId: "saudedb1-34db7",
  storageBucket: "saudedb1-34db7.appspot.com",
  messagingSenderId: "130723741950",
  appId: "1:130723741950:web:624f6a28ee7b09101b25af",
  measurementId: "G-P5XDR1ENQ0"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();


export {firestore, query, where, getDocs, collection, addDoc, doc, getDoc, deleteDoc, updateDoc};
