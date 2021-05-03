const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (id === null) {
  location.href = "/";
}

const url = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products/";
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
                                        <div id="imageModal" class="modal">
                                          <span class="exit">$times;</span>
                                          <img class="modalContent" id="image1">
                                        </div>
                                    </div>
                                    <div class="productContainer">
                                        <h2>${product.name}</h2>
                                        <p class="productDescription">${product.description}</p>
                                        <img src="images/chefHat.png" alt="chefIcon" class="chefIcon">
                                        <img src="images/people.png" alt="people" class="people">
                                        <img src="images/ingredient.png" alt="ingredients" class="ingredients">
                                        <p>Cooking time</p>
                                    </div>
                              </div>`;
}

var modal = document.getElementById("imageModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("image1");

img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

var span = document.getElementsByClassName("exit")[0];

span.onclick = function () {
  modal.style.display = "none";
};
