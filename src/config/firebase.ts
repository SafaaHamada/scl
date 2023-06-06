import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCVDbOvHIRR3iyp8OrRwtJveodeHnGoPRo',
  authDomain: 'sclibrary-741f9.firebaseapp.com',
  projectId: 'sclibrary-741f9',
  storageBucket: 'sclibrary-741f9.appspot.com',
  messagingSenderId: '691184740803',
  appId: '1:691184740803:web:3889088d24fe702e9ff576',
  measurementId: 'G-DGE6ZDDWPN',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
