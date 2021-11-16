import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPBpsBxMG5CHGPuAs-yQlTwcdN7jtqvQM",
    authDomain: "root4judge-b3cf1.firebaseapp.com",
    projectId: "root4judge-b3cf1",
    storageBucket: "root4judge-b3cf1.appspot.com",
    messagingSenderId: "1083800457393",
    appId: "1:1083800457393:web:b4998fc693e2be58c01290",
    measurementId: "G-3VJJJR6LJS"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default getFirestore();