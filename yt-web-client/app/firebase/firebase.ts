// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, 
    signInWithPopup,
    GoogleAuthProvider, 
    onAuthStateChanged, 
    User } 
from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGLCmhC9AMenKvgLT1Oeh6PH0qqcpEkuw",
  authDomain: "clone-47127.firebaseapp.com",
  projectId: "clone-47127",
  appId: "1:1005442723878:web:10eb447ecf760d8cf9f6e7",
  measurementId: "G-5G5CMRXY9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export function signInWithGoogle(){
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut(){
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null)=>void){
    return onAuthStateChanged(auth,callback);
}