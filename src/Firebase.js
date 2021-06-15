import firebase from "firebase";
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyBx-O4WB2Q2pvk87ALTRGHaSehT5G9jcTU",
  authDomain: "tonicorganix.firebaseapp.com",
  projectId: "tonicorganix",
  storageBucket: "tonicorganix.appspot.com",
  messagingSenderId: "928688123442",
  appId: "1:928688123442:web:f456fa1143190c9322d62b"
};
const fire = firebase.initializeApp(firebaseConfig);

export default fire;