import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth, } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyC7SFVjYgn4-BWADlIYgxhW_l-iS272GYM',
  authDomain: 'mytestproject-976e5.firebaseapp.com',
  projectId: 'mytestproject-976e5',
  storageBucket: 'mytestproject-976e5.appspot.com',
  messagingSenderId: '929033988967',
  appId: '1:929033988967:web:097340ef65b5274ef89dc2',
  measurementId: 'G-G2KG7NW4MZ'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const Context = createContext({
  auth,
  db,
});

root.render(
  <Context.Provider value={{
    auth,
    db
  }}>
    <App />
  </Context.Provider>
);

