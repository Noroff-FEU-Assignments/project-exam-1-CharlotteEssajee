// create innerHTML with wp api

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products/";
const urlDetail =
  "https://foodz0ne.flowerpower.one/wp-json/wc/store/products/" + id;
const corsFix = url + id;

const idContainer = document.querySelector(".id");
const detailContainer = document.querySelector(".details");

idContainer.innerHTML = "";

async function getId() {
  try {
    const response = await fetch(corsFix);
    const product = await response.json();

    console.log(product);
    createHtml(product);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = error;
  }
}

getId();

function createHtml(product) {
  detailContainer.innerHTML = `<div class ="cardDetail">
                                    <div class="imageContainer">
                                        <img class="openModalImage" src="${product.images[0].src}" alt="${product.name}">
                                    </div>
                                    <div class="productContainer">
                                        <h1 class="recipeName">${product.name}</h1>
                                        <p class="date">Updated 25.05.2020, by Charlotte</p>
                                        <span class="people"><i class="fas fa-user"></i>4 portions</span>
                                        <span class="ingredients"><i class="fas fa-lemon"></i>6 ingredients</span>
                                        <p class="productDescriptionDetail">${product.description}</p>
                                    </div>
                              </div>`;
}

// change title dynamically
const title = document.querySelector("title");

async function changeTitle() {
  try {
    const responsePost = await fetch(urlDetail);
    const product = await responsePost.json();

    title.innerHTML += ` | ${product.name}`;
  } catch (error) {
    console.log("error", error);
  }
}

changeTitle();

// modal image
