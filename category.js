fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((res) => res.json())
  .then(showCategories);

function showCategories(cats) {
  cats.forEach(showCategory);
}
function showCategory(cat) {
  console.log(cat);
  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector(".category").textContent = cat.season;
  clone.querySelector(
    ".category"
  ).href = `productlist.html?season=${cat.season}`;
  //appender
  document.querySelector(".flex_box ol").appendChild(clone);
}
