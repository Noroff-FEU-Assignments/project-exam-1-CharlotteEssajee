// fetch 10 results, load more button
const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";
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
      <a href="blogPostDetails.html?id=${product.id}" class="listOfBlogPosts">
      <div class="card">
        <img src="${product.images[0].src}" alt="${product.name}" class="blogPostImage">
        <h1 class="productName">${product.name}</h1>
        <p class="productDescription">${product.short_description}</p>
        <button>Read more</button>
        </div>
    </a>`;
  });
}

const loadMore = document.querySelector(".loadMoreButton");
