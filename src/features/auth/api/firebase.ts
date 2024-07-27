

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvdwjk8ycZiGgOZHA7A0fztozG3R57nHA",
  authDomain: "infinity-vinay.firebaseapp.com",
  projectId: "infinity-vinay",
  storageBucket: "infinity-vinay.appspot.com",
  messagingSenderId: "160241808929",
  appId: "1:160241808929:web:b739bc450b45208b45d560",
  measurementId: "G-VZ9KFZ3S68"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginWithGoogleFunc = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error('Sign-in error:', error);
  }
};


// this need to be corrected
