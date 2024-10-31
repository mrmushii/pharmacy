import { products } from "./products.js";

function loadProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product) => {
    const productCard = document.createElement("div");

    productCard.innerHTML = `
          <div class="box" onclick="goToProductPage(${product.id})">
            <div class="box-content">
              <img class="box-img" src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p class="company category">${product.description}</p>
              <p class="prc">${product.price}</p>
              <button class="cart-btn" onclick="goToProductPage(${product.id})">View Product</button>
            </div>
          </div>
      `;

    productList.appendChild(productCard);
  });
}

// Make the function globally accessible
window.goToProductPage = function (productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product_page.html";
};

// Call this function to load products on the landing page
loadProducts();

window.showSuggestions = function () {
  const query = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsContainer = document.getElementById("suggestions");
  suggestionsContainer.innerHTML = ""; // Clear previous suggestions

  if (query.length === 0) return;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  filteredProducts.forEach((product) => {
    const suggestionItem = document.createElement("div");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = product.name;

    // Click event to go to the product page
    suggestionItem.onclick = () => {
      goToProductPage(product.id);
    };

    suggestionsContainer.appendChild(suggestionItem);
  });
};
