// fetch 10 results, load more button
const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".listResults");

async function fetchBlogPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < json; i++) {
      if (i === 10) {
        break;
      }

      resultsContainer.innerHTML += `
      <a href="blogPostDetails.html?id=${json}" class="product">
      <div class="card">
        <img src="${product.images[0].src}" alt="${product.name}">
        <p class="productName">${product.name}</p>
        <p class="productDescription">${product.short_description}</p>
        <button>Read more</button>
        </div>
    </a>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = ("error", error);
  }
}

fetchBlogPosts();
