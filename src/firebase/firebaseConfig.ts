import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALlff-zbc705FwQv8RJCWIaNB9WJAtEFA",
  authDomain: "bonds-b5d47.firebaseapp.com",
  projectId: "bonds-b5d47",
  storageBucket: "bonds-b5d47.firebasestorage.app",
  messagingSenderId: "847779225504",
  appId: "1:847779225504:web:acf103315628fafbaacec5",
  databaseURL: "https://bonds-b5d47-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
export default app;
