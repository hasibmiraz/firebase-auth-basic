import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBmXVwdGGUDy4_X3WwndUJxipTGARu-pkE',
  authDomain: 'simple-firebase-auth-e268f.firebaseapp.com',
  projectId: 'simple-firebase-auth-e268f',
  storageBucket: 'simple-firebase-auth-e268f.appspot.com',
  messagingSenderId: '107996133782',
  appId: '1:107996133782:web:d9751d014ddf45360845b7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
