import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqMO991aJfEzKpXDmi8hvUczrQ4F_fqfo",
  authDomain: "crwn-clothing-db-16119.firebaseapp.com",
  projectId: "crwn-clothing-db-16119",
  storageBucket: "crwn-clothing-db-16119.appspot.com",
  messagingSenderId: "682148963201",
  appId: "1:682148963201:web:bdf986694f003736d13e80"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);