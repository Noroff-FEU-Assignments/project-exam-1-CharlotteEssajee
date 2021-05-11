// create cards innerHTML
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
        <img src="${product.images[0].src}" alt="${product.name}" class="blogImage">
        <h1 class="productName">${product.name}</h1>
        <p class="productDescription">${product.short_description}</p>
        <button>Read more</button>
        </div>
    </a>`;
  });
}

const leftButton = document.getElementById("previous");
const rightButton = document.getElementById("next");

rightButton.onclick = function () {
  document.getElementsById("carousel").scrollright += 25;
};

// ????? skjer her
/*var sLeft = element.scrollLeft;
element.scrollLeft = 10;

const leftButton = document.getElementById("previous");
const rightButton = document.getElementById("next");

leftButton.onclick = function () {
  document.getElementById("carousel").scrollLeft += 25;
};

rightButton.onclick = function () {
  document.getElementById("carousel").scrollRight;
};
*/
