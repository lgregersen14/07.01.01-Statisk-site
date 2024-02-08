const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

//https://kea-alt-del.dk/t7/api/products
fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(data) {
  console.log(data);
  document.querySelector(".product_name").textContent = data.productdisplayname;
  document.querySelector(".product_price").textContent = data.price;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${data.id}.webp`;

  document.querySelector(".brand").textContent = data.brandname;
  document.querySelector(".product_id").textContent = data.productdisplayname;
  document.querySelector(".product_gender").textContent = data.gender;
  document.querySelector(".product_category").textContent = data.category;
}
