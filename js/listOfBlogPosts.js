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
                                                      <button class="readMore">Read more</button>
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
let numberOfPosts = 10;

loadMoreButton.addEventListener("click", (e) => {
  const blogRecipe = document.getElementsByClassName("listOfBlogPosts");

  for (let i = numberOfPosts; i < numberOfPosts + 2; i++) {
    if (numberOfPosts < blogRecipe.length) {
      blogRecipe[i].style.display = "block";
    }
  }

  numberOfPosts += 2;

  if (numberOfPosts >= blogRecipe.length) {
    loadMoreButton.style.display = "none";
  }
});

console.log(defaultPosts);
