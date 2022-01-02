import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initialiazeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialiazeAuthentication;