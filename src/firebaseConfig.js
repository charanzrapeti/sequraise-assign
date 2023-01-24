import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDza-NRYf4Qjv0eFXGYXJlzuW2qm9qYfe0",
  authDomain: "sequraise.firebaseapp.com",
  projectId: "sequraise",
  storageBucket: "sequraise.appspot.com",
  messagingSenderId: "968735214974",
  appId: "1:968735214974:web:c88a4997d5bec79caab72f",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
