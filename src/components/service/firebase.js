import {initializeApp} from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyC9pj--8b1q_jKkPPhqf8b5GHDPcutVPAw",
    authDomain: "coffee-shop-3da83.firebaseapp.com",
    databaseURL: "https://coffee-shop-3da83-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "coffee-shop-3da83",
    storageBucket: "coffee-shop-3da83.appspot.com",
    messagingSenderId: "156708565327",
    appId: "1:156708565327:web:ef43d2119806158c05553a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const dataBase = getFirestore(app);


