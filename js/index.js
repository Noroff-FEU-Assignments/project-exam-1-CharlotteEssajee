const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";
const productContainer = document.querySelector(".products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();

    const product = getResults;

    createHTML(getResults);
  } catch (error) {
    console.log(error);
  }
}

getProducts();

function createHTML(products) {
  const dinner = products.filter(function (product) {
    return product.categories[0].slug === "dinner";
  });

  dinner.forEach(function (product) {
    productContainer.innerHTML += `<a href="blogPostDetails.html?id=${product.id}" class="product">
        <img src="${product.images[0].src}" alt="${product.name}">
        <p class="productName">${product.name}</p>
        <p class="productDescription">${product.short_description}</p>
        <button>Read more</button>
      </a>`;
  });
}
