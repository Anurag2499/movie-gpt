// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDsgZBOPXY6-GY7d_5U7x1jnS3wHumFJlc',
  authDomain: 'netflixgpt-b5bb2.firebaseapp.com',
  projectId: 'netflixgpt-b5bb2',
  storageBucket: 'netflixgpt-b5bb2.appspot.com',
  messagingSenderId: '335806199858',
  appId: '1:335806199858:web:5258f010d135fba377242b',
  measurementId: 'G-JFWB4S3C7Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
