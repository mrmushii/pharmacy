import { products } from "./products.js";

function loadProductDetails() {
  const productId = localStorage.getItem("selectedProductId");
  const product = products.find((p) => p.id == productId);

  if (product) {
    const productDetail = document.getElementById("product-detail");

    productDetail.innerHTML = `
            <div class="product-card">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class= "details"><h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>${product.price}</p>
                <button>Buy now</button>
                </div>
            </div>
        `;
  }
}

loadProductDetails();
