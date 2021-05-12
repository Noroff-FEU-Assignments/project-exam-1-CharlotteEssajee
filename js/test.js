/*
const url =
  "https://foodz0ne.flowerpower.one/wp-json/wp/v2/product?per_page=12";
const productContainer = document.querySelector(".blogPosts");

async function getRecipes() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    console.log(getResults);

    createHTML(getResults);
  } catch (error) {
    console.log;
  }
}

getRecipes();

function createHTML(products) {
  products.forEach(function (product) {
    productContainer.innerHTML += `
      <a href="blogPostDetails.html?id=${product.title.rendered}" class="listOfBlogPosts">
      <div class="card">
        <img src="${product.images[0].src}" alt="${product.name}" class="blogPostImage">
        <h1 class="productName">${product.title.rendered}</h1>
        <p class="productDescription">${product.excerpt.rendered}</p>
        <button>Read more</button>
        </div>
    </a>`;
  });
}

const loadMore = document.querySelector(".loadMoreButton");
*/
