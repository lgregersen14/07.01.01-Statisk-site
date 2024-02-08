const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category);
console
  .log(ting)
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}
function showCategory(cat) {
  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector(".category").textContent = cat.category;
  clone.querySelector(
    ".category"
  ).href = `productlist.html?category=${cat.category}`;
  //appender
  document.querySelector(".flex_box ol").appendChild(clone);
}
