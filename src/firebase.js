import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuOZHkc0wwEXf6gF-xyGXB5Culjg7Rhdw",
    authDomain: "sample-project-229e1.firebaseapp.com",
    databaseURL: "https://sample-project-229e1-default-rtdb.firebaseio.com",
    projectId: "sample-project-229e1",
    storageBucket: "sample-project-229e1.appspot.com",
    messagingSenderId: "1071064923256",
    appId: "1:1071064923256:web:fcf73d91c95fedf5b4818d",
    measurementId: "G-QJ2QYJTBSK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
