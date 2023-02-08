import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDvXVnNA7Wwwul0zxF4sMS4FTMKOfPtIpk',
  authDomain: 'fyesta-trello.firebaseapp.com',
  projectId: 'fyesta-trello',
  storageBucket: 'fyesta-trello.appspot.com',
  messagingSenderId: '441776517983',
  appId: '1:441776517983:web:85ae2234b24d200f773cea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
