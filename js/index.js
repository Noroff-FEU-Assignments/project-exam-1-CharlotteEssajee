// create cards innerHTML
const url =
  "https://foodz0ne.flowerpower.one/wp-json/wc/store/products?per_page=12";
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
        <img src="${product.images[0].src}" alt="${product.name}" class="blogImage">
        <h1 class="productName">${product.name}</h1>
        <p class="productDescription">${product.short_description}</p>
        <div class="readMoreButton">
          <button>Read more</button>
        </div>
        </div>
    </a>`;
  });
}

// scroll effect to buttons
const leftButton = document.getElementById("previous");
const rightButton = document.getElementById("next");
const carouselProducts = document.getElementById("carouselProducts");
const productsWidth = carouselProducts.offsetWidth;

rightButton.addEventListener("click", function (event) {
  carouselProducts.scrollLeft += productsWidth;
  event.preventDefault();
});

leftButton.addEventListener("click", function (event) {
  carouselProducts.scrollLeft -= productsWidth;
  event.preventDefault();
});
