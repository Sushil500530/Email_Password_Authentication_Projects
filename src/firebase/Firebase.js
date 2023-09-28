// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ4CgTt4KfAu8-9COOdCvzEBRq-SZJuKk",
  authDomain: "uer-email-password-auth.firebaseapp.com",
  projectId: "uer-email-password-auth",
  storageBucket: "uer-email-password-auth.appspot.com",
  messagingSenderId: "99202859671",
  appId: "1:99202859671:web:f9c428eda4a774bc469fd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;