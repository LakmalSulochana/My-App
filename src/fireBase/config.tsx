// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArMCLRj0_xUCtl4QuzMtGZiBzs5Soup5I",
  authDomain: "assignment-one-4c211.firebaseapp.com",
  projectId: "assignment-one-4c211",
  storageBucket: "assignment-one-4c211.appspot.com",
  messagingSenderId: "960046730176",
  appId: "1:960046730176:web:6a6e178d102ace53665625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };