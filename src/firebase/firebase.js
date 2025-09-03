import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9nkVVdyXVg-BeC3cxYCUV1ru_OI-zOl0",
  authDomain: "netflix-clone-167ff.firebaseapp.com",
  projectId: "netflix-clone-167ff",
  storageBucket: "netflix-clone-167ff.firebasestorage.app",
  messagingSenderId: "82103896454",
  appId: "1:82103896454:web:c6c80b30937235e364c407",
  measurementId: "G-WJE97MDYS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth}