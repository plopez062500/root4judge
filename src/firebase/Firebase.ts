import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCNx4cO3P0w4yJZ95IqYPdx8F7-jEm6Nss",
    authDomain: "golden-glaze-pm.firebaseapp.com",
    projectId: "golden-glaze-pm",
    storageBucket: "golden-glaze-pm.appspot.com",
    messagingSenderId: "1035652862564",
    appId: "1:1035652862564:web:b98706c60e3363580a0571"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default getFirestore();