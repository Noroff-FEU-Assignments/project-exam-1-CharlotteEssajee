// fetch 10 results, load more button
const url =
  "https://foodz0ne.flowerpower.one/wp-json/wp/v2/product?per_page=12";

const recipeContainer = document.querySelector(".blogPosts");
const loadMoreButton = document.querySelector(".loadMoreButton");

async function getRecipes() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    console.log(product);

    recipeContainer.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
      console.log(product[i]);

      recipeContainer.innerHTML += `
                                                <a href="blogPostDetails.html?id=${product.title}" class="listOfBlogPosts>
                                                  <div class="card">
                                                    <img src="${product[i]._embedded["wp:featuredmedia"]["0"].source_url}" alt="${recipes[i].title.rendered}" class="blogPostImage">
                                                    <h1 class="productName">${product[i].title.rendered}</h1>
                                                    <p class="productDescription">${product.excerpt.rendered}</p>
                                                    <button>Read more</button>
                                                  </div>
                                                </a>`;

      loadMoreButton.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

getRecipes();

let defaultPosts = 9;

loadMoreButton.addEventListener("click", (e) => {
  const blogRecipe = document.querySelectorAll(".blogPost");

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
