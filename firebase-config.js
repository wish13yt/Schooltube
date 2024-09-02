// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApdBzM4CsG52QUEBH-h1tCCkdODcJF3ZM",
  authDomain: "schooltube-d877c.firebaseapp.com",
  databaseURL: "https://schooltube-d877c-default-rtdb.firebaseio.com/",
  projectId: "schooltube-d877c",
  storageBucket: "schooltube-d877c.appspot.com",
  messagingSenderId: "758988416504",
  appId: "1:758988416504:web:949b4303f1516947e0220d",
  measurementId: "G-LGE5MYKFZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const storage = getStorage(app);
const database = getDatabase(app);

// Exporting the initialized services for use in other modules
export { storage, database };
