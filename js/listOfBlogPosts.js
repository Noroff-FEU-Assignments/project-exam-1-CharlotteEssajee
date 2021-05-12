// fetch 10 results, load more button
const url =
  "https://foodz0ne.flowerpower.one/wp-json/wc/store/products?per_page=12";

const recipeContainer = document.querySelector(".blogPosts");
const loadMoreButton = document.querySelector(".loadMoreButton");

async function getRecipes() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    console.log(product);

    recipeContainer.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
      console.log(product[i].name);

      recipeContainer.innerHTML += `
                                                <a href="blogPostDetails.html?id=${product[i].id}">
                                                  <div class="blogCard">
                                                    <img src="${product[i].images[0].src}" alt="${product[i].name}" class="blogPostImage">
                                                    <h1 class="productNameDetail">${product[i].name}</h1>
                                                    <p class="productDescription">${product[i].short_description}</p>
                                                    <div class="readMoreButton">
                                                      <button>Read more</button>
                                                    </div>
                                                  </div>
                                                </a>`;
      loadMoreButton.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

getRecipes();

let defaultPosts = 6;

loadMoreButton.addEventListener("click", (e) => {
  const blogRecipe = document.querySelectorAll(".listOfBlogPosts");

  for (let i = defaultPosts; i < defaultPosts + 2; i++) {
    if (defaultPosts < blogRecipe.length) {
      blogRecipe[i].style.display = "block";
    }
  }

  defaultPosts += 3;

  if (defaultPosts >= blogRecipe.length) {
    loadMoreButton.style.display = "none";
  }
});
