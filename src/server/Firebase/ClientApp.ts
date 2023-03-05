import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { env } from 'src/env.mjs';

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: env.NEXT_PUBLIC_APPID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
