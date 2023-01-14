import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0L-8sGk897GlsitUcThhuvkpkGiPc-og",
  authDomain: "user-authentication-507c3.firebaseapp.com",
  projectId: "user-authentication-507c3",
  storageBucket: "user-authentication-507c3.appspot.com",
  messagingSenderId: "323340052415",
  appId: "1:323340052415:web:203f85fb4b1a24ae91a30a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
