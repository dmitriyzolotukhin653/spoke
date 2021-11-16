import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcBSIvyj1D4mv_1kc46fSNps_oqVus998",
  authDomain: "todo-spoke.firebaseapp.com",
  databaseURL:
    "https://todo-spoke-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-spoke",
  storageBucket: "todo-spoke.appspot.com",
  messagingSenderId: "919893659835",
  appId: "1:919893659835:web:62044b0764b6bce53ed99e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
