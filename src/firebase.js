import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/analytics';
// import 'firebase/functions';

const firebaseConfig = {
	apiKey: 'AIzaSyBU9gENkwkb62ifqXLQmq5-bcFkN58zSXs',
	authDomain: 'svelte-fire-e2e90.firebaseapp.com',
	projectId: 'svelte-fire-e2e90',
	storageBucket: 'svelte-fire-e2e90.appspot.com',
	messagingSenderId: '937322636328',
	appId: '1:937322636328:web:ae2753fa90ff5f41fc011d',
	measurementId: 'G-5Z3ZCWXLX0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
// export const functions = firebase.functions();
