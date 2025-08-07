// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ST7gLhlYKzmOTNLOA_J88oTw4i817kU",
  authDomain: "vsplit1-b2ed3.firebaseapp.com",
  projectId: "vsplit1-b2ed3",
  storageBucket: "vsplit1-b2ed3.appspot.com",  // ✅ fixed `.app` to `.appspot.com`
  messagingSenderId: "218798598983",
  appId: "1:218798598983:web:23de4b5a7ab5c2ab07ba62",
  measurementId: "G-FN2EKMTK59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
