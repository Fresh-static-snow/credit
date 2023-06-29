import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// APIKEY="AIzaSyCNFUZ4pPw1uXv0oEIP946eOBExAMRN35k",
// AUTHDOMAIN="credit-app-5baa7.firebaseapp.com",
// PROJECTID="credit-app-5baa7",
// STORAGEBUCKET="credit-app-5baa7.appspot.com",
// MESSAGINGSENDERID="17658799722",
// APPID="1:17658799722:web:ed0e2f387c6bf2704bcc13"

const firebaseConfig = {
    apiKey: "AIzaSyCNFUZ4pPw1uXv0oEIP946eOBExAMRN35k",
    authDomain: "credit-app-5baa7.firebaseapp.com",
    projectId: "credit-app-5baa7",
    storageBucket: "credit-app-5baa7.appspot.com",
    messagingSenderId: "17658799722",
    appId: "1:17658799722:web:ed0e2f387c6bf2704bcc13"
  };

initializeApp(firebaseConfig);

export const database = getFirestore();

