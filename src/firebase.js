
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey:"AIzaSyBvv_SbDHo33UCq6A6Oi6TxIg4Aut1mRaQ",
  authDomain: "theblissflight.firebaseapp.com",
  projectId: "theblissflight",
  storageBucket: "theblissflight.appspot.com",
  messagingSenderId: "493310231060",
  appId: "1:493310231060:web:8631b9d3213ad60a9edd01"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);