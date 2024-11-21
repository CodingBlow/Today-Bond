import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALlff-zbc705FwQv8RJCWIaNB9WJAtEFA",
  authDomain: "bonds-b5d47.firebaseapp.com",
  projectId: "bonds-b5d47",
  storageBucket: "bonds-b5d47.appspot.com", // Fixed typo
  messagingSenderId: "847779225504",
  appId: "1:847779225504:web:acf103315628fafbaacec5",
  databaseURL: "https://bonds-b5d47-default-rtdb.firebaseio.com", // Ensure this matches your Realtime Database URL
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

// Named exports for flexibility
export { app, database };

// Optional: Default export for the app (useful if needed elsewhere)
export default app;
