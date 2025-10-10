// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getDatabase, set, get, ref, update, remove } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js";

// Firebase config and init
const firebaseConfig = {
  apiKey: "AIzaSyAjxLDQ7PRo9Zr04QnlT6u_j4_8B-6q5KI",
  authDomain: "mobile-prog-27a4a.firebaseapp.com",
  projectId: "mobile-prog-27a4a",
  storageBucket: "mobile-prog-27a4a.appspot.com",
  messagingSenderId: "870551924930",
  appId: "1:870551924930:web:f357ec3d5c16cd20ff0b5b",
  measurementId: "G-SQWY28M5HQ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db);

window.db = db;
window.ref = ref;
window.set = set;

// Function to write user data
function writeUserData(userID, firstname, lastname, email) {
  set(ref(db, 'user/' + userID), {
    firstname: firstname,
    lastname: lastname,
    email: email,
  });
}

// Example usage
writeUserData(1, "Susan");
writeUserData(2, "KC");
writeUserData(3, "susan@123.com");

// Function to read user data
function readUser() {
  const userRef = ref(db, 'user');

  get(userRef).then((snapshot) => {
    snapshot.forEach((childSnapshot) => {
      console.log(childSnapshot.val());
    });
  }).catch((error) => {
    console.error("Error reading user data:", error);
  });
}

// Call the read function
readUser();



// DOM and jQuery logic
document.addEventListener("DOMContentLoaded", function () {
  const shopButton = document.querySelector(".btn");

  shopButton.addEventListener("mouseover", function () {
    shopButton.style.backgroundColor = "#e0e0e0";
    shopButton.style.color = "#000";
  });

  shopButton.addEventListener("mouseout", function () {
    shopButton.style.backgroundColor = "#eb3e2b";
    shopButton.style.color = "#000";
  });

  shopButton.addEventListener("click", function (event) {
    const confirmAction = confirm("Are you sure you want to visit the shop?");
    if (!confirmAction) {
      event.preventDefault();
    }
  });
  // new product
  $(document).ready(function() {
    $("#gamingMouse").click(function() {
        window.location.href = "product.html";
    });
});

// New product
$(document).ready(function() {
    // When the Gaming Mouse card is clicked, go to product.html
    $("#gamingMouse").click(function() {
        window.location.href = "product.html";
    });
});


  // jQuery logic
  $(function () {
    $("#toggle-slide").click(function () {
      $("#promo-section").slideToggle("slow");
    });

    setTimeout(function () {
      $("#promo-section").slideDown("slow");
    }, 2000);

    $(".product-card").css("opacity", 0).each(function (i) {
      $(this).delay(500 * i).fadeTo(800, 1);
    });
  });
});

// Pop-up QR
