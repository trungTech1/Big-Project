import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtnbb3RPUdpicnWrm9_zkHBZ9u1LlDttk",
  authDomain: "shopanhqt.firebaseapp.com",
  projectId: "shopanhqt",
  storageBucket: "shopanhqt.appspot.com",
  messagingSenderId: "453382906166",
  appId: "1:453382906166:web:a1078d1afab91e8ad71397",
  measurementId: "G-E94G0M9L62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
