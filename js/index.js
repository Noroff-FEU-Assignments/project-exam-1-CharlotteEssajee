const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getRecipes() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    createHTML(getResults);
  } catch (error) {
    console.log;
  }
}

getRecipes();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `
    <a href="blogPostDetails.html?id=${product.id}" class="product">
    <div class="card">
      <img src="${product.images[0].src}" alt="${product.name}">
      <p class="productName">${product.name}</p>
      <p class="productDescription">${product.short_description}</p>
      <button>Read more</button>
      </div>
  </a>`;
  });
}
