// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD71X8ZlJBaRM-6hH7T1VaxGL9ssekjds",
  authDomain: "auths-fefbe.firebaseapp.com",
  projectId: "auths-fefbe",
  storageBucket: "auths-fefbe.appspot.com",
  messagingSenderId: "850139000313",
  appId: "1:850139000313:web:e461d36888767913e82128",
  measurementId: "G-ZJ5DKZNERZ"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };