import firebase from 'firebase/app';
import 'firebase/database';
import config from './firebaseConfig';

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
