// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../Config/firebaseConfig";
import { getDatabase } from "firebase/database";

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const db = getDatabase(app);

const auth = getAuth(app);

export { db, analytics, auth };
