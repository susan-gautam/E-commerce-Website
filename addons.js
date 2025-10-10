document.addEventListener("DOMContentLoaded", () => {
  // --- 1️⃣ Add Pay with Khalti beside eSewa in product pages ---
  const esewaBox = document.querySelector(".esewa-box");
  if (esewaBox && !document.querySelector(".khalti-box")) {
    const khaltiBox = document.createElement("a");
    khaltiBox.className = "khalti-box";
    khaltiBox.textContent = "Pay with Khalti";
    khaltiBox.href = "#";
    esewaBox.insertAdjacentElement("afterend", khaltiBox);
  }

  // --- 2️⃣ Add "Add to Cart" button dynamically if product page ---
  const productInfo = document.querySelector(".product-info");
  if (productInfo && !document.querySelector(".add-to-cart")) {
    const addToCart = document.createElement("button");
    addToCart.className = "add-to-cart";
    addToCart.textContent = "Add to Cart";
    productInfo.appendChild(addToCart);

    addToCart.addEventListener("click", () => {
      // Get product name and price dynamically from page
      const name = document.querySelector(".product-title")?.textContent?.trim() || "Unknown Product";

      // Extract numeric value only (ignores Rs., commas, etc.)
      const priceText = document.querySelector(".new-price")?.textContent || "0";
      const cleanPrice = priceText.replace(/[^\d]/g, ""); // removes non-digits
      const price = parseInt(cleanPrice, 10); // convert to integer

      const product = { name, price };

      // Get current cart and add new product
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      cart.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cart));

      alert(`${name} added to cart (Rs. ${price})!`);
    });
  }

  // --- 3️⃣ Add Cart icon beside logo ---
  const logoContainer = document.querySelector(".logo-container");
  if (logoContainer && !document.querySelector(".cart-icon")) {
    const cart = document.createElement("div");
    cart.className = "cart-icon";
    cart.innerHTML = "🛒";
    cart.style.cursor = "pointer";
    cart.style.fontSize = "26px";
    cart.style.marginLeft = "15px";
    logoContainer.appendChild(cart);
    cart.addEventListener("click", () => {
      window.location.href = "cart.html";
    });
  }

  // --- 4️⃣ Make existing Welcome, User clickable → profile.html ---
  const welcomeUser = document.getElementById("welcome-user");
  if (welcomeUser) {
    welcomeUser.style.cursor = "pointer";
    welcomeUser.title = "View Profile";
    welcomeUser.addEventListener("click", () => {
      window.location.href = "profile.html";
    });
  }
});


// --- Admin access link dynamically ---
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username");

  if (username === "Susan") {
    const userSection = document.querySelector(".user-section");
    const adminLink = document.createElement("a");
    adminLink.href = "admin.html";
    adminLink.textContent = "Admin Dashboard";
    adminLink.style.color = "#8a2be2"; // light purple
    adminLink.style.fontWeight = "bold";
    adminLink.style.marginLeft = "15px";
    userSection.appendChild(adminLink);
  }
});


// --- Clean up menu links (remove Contact) ---
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll("#hamburger-dropdown");
  dropdowns.forEach(dropdown => {
    const links = dropdown.querySelectorAll("a");
    links.forEach(link => {
      if (link.textContent.trim() === "Contact") {
        link.parentElement.remove(); // remove Contact
      }
      if (link.textContent.trim() === "About") {
        link.href = "about.html"; // redirect About to new page
      }
    });
  });
});

// --- Make "Products" menu open products.html ---
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#hamburger-dropdown a");
  links.forEach(link => {
    if (link.textContent.trim() === "Products") {
      link.href = "products.html";
    }
  });
});
