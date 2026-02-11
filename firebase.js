// firebase.js
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm9QsD6NwRF0zusMzgESEyA43hjEyHRhw",
  authDomain: "sw-website-68.firebaseapp.com",
  databaseURL: "https://sw-website-68-default-rtdb.firebaseio.com",
  projectId: "sw-website-68",
  storageBucket: "sw-website-68.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:28d2f983c552a118e9397c",
  measurementId: "G-ESPPG76N3H"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Analytics (optional)
if (typeof firebase.analytics !== 'undefined') {
  firebase.analytics();
}

// Export Database reference function
function initializeFirebase() {
  return firebase.database();
}

// Make it globally available
window.initializeFirebase = initializeFirebase;
