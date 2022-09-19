import firebase from "firebase";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoguSDxZ23768PWrUo0gvPNdhg4W3h76M",
  authDomain: "zelar-practice.firebaseapp.com",
  projectId: "zelar-practice",
  storageBucket: "zelar-practice.appspot.com",
  messagingSenderId: "8535217997",
  appId: "1:8535217997:web:f1396e99fb9540dbf40904",
  measurementId: "G-Q8R7WEQ890"
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)