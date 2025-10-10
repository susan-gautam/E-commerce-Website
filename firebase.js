// Firebase.js

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAjxLDQ7PRo9Zr04QnlT6u_j4_8B-6q5KI",
  authDomain: "mobile-prog-27a4a.firebaseapp.com",
  projectId: "mobile-prog-27a4a",
  storageBucket: "mobile-prog-27a4a.appspot.com",
  messagingSenderId: "870551924930",
  appId: "1:870551924930:web:f357ec3d5c16cd20ff0b5b",
  measurementId: "G-SQWY28M5HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Make Firebase functions available globally
window.db = db;
window.set = set;
window.get = get;
window.ref = ref;
window.update = update;
window.remove = remove;

// --- CRUD Utility Functions ---
// Create / Write
export function writeUserData(userID, firstname, lastname, email) {
  return set(ref(db, 'user/' + userID), {
    firstname: firstname,
    lastname: lastname,
    email: email,
  });
}
// Read
export function readUsers() {
  const userRef = ref(db, 'user');
  return get(userRef)
    .then((snapshot) => {
      let data = [];
      snapshot.forEach((childSnapshot) => {
        data.push(childSnapshot.val());
      });
      return data;
    })
    .catch((error) => {
      console.error("Error reading user data:", error);
      throw error;
    });
}
// Update
export function updateUser(userID, data) {
  return update(ref(db, 'user/' + userID), data);
}
// Delete
export function deleteUser(userID) {
  return remove(ref(db, 'user/' + userID));
}
