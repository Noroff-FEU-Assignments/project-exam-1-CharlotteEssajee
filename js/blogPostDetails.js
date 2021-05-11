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
                                        <img src="${product.images[0].src}" alt="${product.name}" id="myImg">
                                    </div>
                                    <div>
                                      <span class="close">
                                    </div>
                                    <div class="productContainer">
                                        <h1 class="recipeName">${product.name}</h1>
                                        <p class="date">Updated 25.05.2020, by Charlotte</p>
                                        <p class="productDescription">${product.description}</p>
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

// må fikse modal
/*var modal = document.getElementById("myModal");
var img1 = document.getElementById("myImg");
var modalImg = document.getElementById("img1");

img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("exit")[0];

span.onclick = function () {
  modal.style.display = "none";
};
*/
