import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB0dkd116KJa7N-yoV5yyJOi0M_utCNqIs",
    authDomain: "root-for-judge.firebaseapp.com",
    projectId: "root-for-judge",
    storageBucket: "root-for-judge.appspot.com",
    messagingSenderId: "909458668159",
    appId: "1:909458668159:web:c7afc19650973757219d4a",
    measurementId: "G-WVFFS151RN"
  };


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export default getFirestore();