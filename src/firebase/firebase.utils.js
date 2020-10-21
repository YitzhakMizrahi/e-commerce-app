import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCM1qhOYiV_rHObWxVzIsVFsEw4W9cpMf0',
  authDomain: 'e-commerce-app-b24ca.firebaseapp.com',
  databaseURL: 'https://e-commerce-app-b24ca.firebaseio.com',
  projectId: 'e-commerce-app-b24ca',
  storageBucket: 'e-commerce-app-b24ca.appspot.com',
  messagingSenderId: '521013936583',
  appId: '1:521013936583:web:3f1f66257a94c47d0799e2',
  measurementId: 'G-2G41CXCN9S',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
