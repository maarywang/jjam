import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOz_b1GFeyaW_i3GkoVRbiEhJkt0xwets",
  authDomain: "jjam-submerge.firebaseapp.com",
  projectId: "jjam-submerge",
  storageBucket: "jjam-submerge.appspot.com",
  messagingSenderId: "588816949443",
  appId: "1:588816949443:web:3acdb352fdfcbd28aa8276",
  measurementId: "G-9H8HK2WT0B",
};

let app;

if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
}
export const auth = getAuth(app);
