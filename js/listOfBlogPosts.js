const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";
const resultsContainer = document.querySelector(".listResults");

async function fetchBlogPosts() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const blogPosts = json.data;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < blogPosts.length; i++) {
      if (i === 10) {
        break;
      }

      const blogImage = blogPosts.id;

      resultsContainer.innerHTML += `
      <a href="blogPostDetails.html?id=${blogImage}" class="product">
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

/*const apiurl = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";

let length = 10;
let offset = 0;

const previousButton = document.getElementById("#previousButton");
const nextButton = document.getElementById("#nextButton");

async function fetchApi(url) {
  try {
    const data = await fetch(
      url + `posts?per_page=${length}&offset=${offset}&_embed`
    );
    const json = await data.json();

    // Validate Buttons visibility
    if (offset === 0) {
      buttonPrevious.style.display = "none";
    } else {
      buttonPrevious.style.display = "block";
    }
    if (json.length < 10) {
      buttonNext.style.display = "none";
    } else {
      buttonNext.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

previousButton.addEventListener("click", () => {
  if (offset >= 10) {
    offset -= 10;
  }
  fetchApi(apiurl);
});
nextButton.addEventListener("click", () => {
  offset += 10;
  fetchApi(apiurl);
});

fetchApi(apiurl); */
