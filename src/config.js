import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCSA7KnxHkdvwUUu0Cbx1DDKhyZrNZtC0U",
  authDomain: "code-platform-56122.firebaseapp.com",
  projectId: "code-platform-56122",
  storageBucket: "code-platform-56122.appspot.com",
  messagingSenderId: "923452642342",
  appId: "1:923452642342:web:4f55f8749f2ad9f93d42e7",
  measurementId: "G-0FQHKQ4505"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};