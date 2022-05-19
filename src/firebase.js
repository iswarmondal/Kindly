import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqRXxJHRcLxw7qozuCcnpY-aqMePdblpw",
  authDomain: "kindly-ebook-reader.firebaseapp.com",
  projectId: "kindly-ebook-reader",
  storageBucket: "kindly-ebook-reader.appspot.com",
  messagingSenderId: "893275852195",
  appId: "1:893275852195:web:46245952e1b6e3d2e35e16",
  measurementId: "G-VKR337B25P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)