import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCk6gkuepcPV4ruto4Nj1ZGlMcFFKrkd58",
  authDomain: "airbnb-71d35.firebaseapp.com",
  databaseURL: "https://airbnb-71d35-default-rtdb.firebaseio.com",
  projectId: "airbnb-71d35",
  storageBucket: "airbnb-71d35.appspot.com",
  messagingSenderId: "584996684660",
  appId: "1:584996684660:web:5e9d1cc78defe4371b6221",
  measurementId: "G-86JP63GE88"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;