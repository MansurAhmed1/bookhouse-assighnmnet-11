// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGN3eifaEbp-WkSxsVquG_TcHf-Oj3JH8",
  authDomain: "try-myself.firebaseapp.com",
  projectId: "try-myself",
  storageBucket: "try-myself.appspot.com",
  messagingSenderId: "164179985116",
  appId: "1:164179985116:web:e268f2998acd0d00566a19",
  measurementId: "G-MVYBWPKY5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyB788wOVunq8bEAHqJ3SMWRDfG_LjAMY3Y",
//   authDomain: "assighnment11.firebaseapp.com",
//   projectId: "assighnment11",
//   storageBucket: "assighnment11.appspot.com",
//   messagingSenderId: "162273793538",
//   appId: "1:162273793538:web:d64289c19f31e5298d791b",
//   measurementId: "G-Q1YBVM0KTL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// export default auth;