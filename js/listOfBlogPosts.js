const apiurl = "https://foodz0ne.flowerpower.one/wp-json/wc/store/products";

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

fetchApi(apiurl);
