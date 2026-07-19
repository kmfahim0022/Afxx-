// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getDatabase
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDBN2z8s4OQSLcdhFKxDuEbI4x_8Uw1QOo",
  authDomain: "afxx-tech-77750.firebaseapp.com",
  databaseURL: "https://afxx-tech-77750-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "afxx-tech-77750",
  storageBucket: "afxx-tech-77750.firebasestorage.app",
  messagingSenderId: "860338969976",
  appId: "1:860338969976:web:780cda5b4fec32fb99fc8d",
  measurementId: "G-DNLQEDGD8S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);







