// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw1vYlyi7izDkwPW8Rm4vc2mArBllrigc",
  authDomain: "monopoly-bank-be.firebaseapp.com",
  projectId: "monopoly-bank-be",
  storageBucket: "monopoly-bank-be.firebasestorage.app",
  messagingSenderId: "249933822365",
  appId: "1:249933822365:web:96d37ae3993ec2063e9774",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
