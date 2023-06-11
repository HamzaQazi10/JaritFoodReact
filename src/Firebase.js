// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_ZHOMTqH_JHq_r3bQy3AgBW1YrOWPKjY",
  authDomain: "airbnb-react-auth.firebaseapp.com",
  projectId: "airbnb-react-auth",
  storageBucket: "airbnb-react-auth.appspot.com",
  messagingSenderId: "1078496445290",
  appId: "1:1078496445290:web:43ae7d4d0feeb405f11b13",
  measurementId: "G-VS97E9GKYG",
  /*   apiKey: process.env.API_KEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: "airbnb-react-auth",
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth, analytics };
