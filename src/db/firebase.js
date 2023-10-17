// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../Config/firebaseConfig";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";


const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const  realTimeDB = getDatabase(app);

const auth = getAuth(app);

const db = getFirestore(app);


export { db, analytics, auth, realTimeDB };
