// fetch 10 results, load more button
const url =
  "https://foodz0ne.flowerpower.one/wp-json/wc/store/products?per_page=12";

const recipeContainer = document.querySelector(".blogPosts");
const loadMoreButton = document.querySelector(".loadMoreButton");

async function getBlogRecipes() {
  try {
    const response = await fetch(url);
    const product = await response.json();

    console.log(product);

    recipeContainer.innerHTML = "";

    for (let i = 0; i < product.length; i++) {
      console.log(product[i].name);

      recipeContainer.innerHTML += `
                                                <a href="blogPostDetails.html?id=${product[i].id}" class="listOfBlogPosts">
                                                  <div class="blogCard">
                                                    <img src="${product[i].images[0].src}" alt="${product[i].name}" class="blogPostImage">
                                                    <h1 class="productNameDetail">${product[i].name}</h1>
                                                    <p class="productDescription">${product[i].short_description}</p>
                                                    <div class="readMoreButton">
                                                      <p class="readMore">Read more</p>
                                                    </div>
                                                  </div>
                                                </a>`;
      loadMoreButton.style.display = "block";
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogRecipes();

// load more btn
let defaultPosts = 8;

loadMoreButton.addEventListener("click", (e) => {
  const blogRecipe = document.getElementsByClassName("listOfBlogPosts");

  for (let i = defaultPosts; i < defaultPosts + 4; i++) {
    if (defaultPosts < blogRecipe.length) {
      blogRecipe[i].style.display = "block";
    }
  }

  defaultPosts += 4;

  if (defaultPosts >= blogRecipe.length) {
    loadMoreButton.style.display = "none";
  }
});

console.log(defaultPosts);
