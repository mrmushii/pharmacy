import { products } from "./products.js";
import { otcMedicines } from "./otc_medicine.js";

function loadProducts() {
  const otcList = document.getElementById("shop-section");
  otcMedicines.forEach((otc_medicine) => {
    const otcCard = document.createElement("div");
    otcCard.classList.add("boxes", "swiper");
    otcCard.innerHTML = `
      <div class="box">
            <div class="box-content">
              <h2>${otc_medicine.name}</h2>
              <div
                class="box-img"
                style="background-image: url(${otc_medicine.image})"
                
              ></div>
              <p>${otc_medicine.description}</p>
            </div>
          </div>
    `;

    otcList.appendChild(otcCard);
  });
}

// Make the function globally accessible
window.goToProductPage = function (productId) {
  localStorage.setItem("selectedProductId", productId);
  window.location.href = "product_page.html";
};

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

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
