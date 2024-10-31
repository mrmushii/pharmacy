import { products } from "./products.js";

window.goToProductPage = function (productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product_page.html";
};

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
