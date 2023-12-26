import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDO2_e1lOG9uA06cLmqyikrcz2PseEQdh8",
    authDomain: "fir-react-den.firebaseapp.com",
    projectId: "fir-react-den",
    storageBucket: "fir-react-den.appspot.com",
    messagingSenderId: "899736266769",
    appId: "1:899736266769:web:bd8f418faae8943591e9b0"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;