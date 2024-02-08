fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log("mit produkt er ", product);
  //fange template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  // billederne
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  //Alt under her er forskellige informationer

  //aendre indhold
  copy.querySelector(".subtle").textContent = product.brandname;
  //naeste
  copy.querySelector(".price").textContent = product.price;
  //naeste
  copy.querySelector("h1").textContent = product.productdisplayname;
  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut");
  }

  //produktet rabat
  if (product.discount) {
    copy.querySelector(".discounted p:last-child").textContent =
      product.discount + "%";
    const discount = (product.price * product.discount) / 100;
    console.log(discount, product.price, product.discount);
    const final = product.price - discount;
    copy.querySelector(".discounted p:first-child").textContent = final;
  } else {
    copy.querySelector(".discounted").remove();
  }
  copy
    .querySelector(".read-more")
    .setAttribute("href", `product.html?id=${product.id}`);
  //appende
  document.querySelector(".grid_1").appendChild(copy);
}

//produktet rabat
//copy.querySelector(".discounted").textContent = product.discount;
//if (product.discount) {
//produktet er nedsat
//copy.querySelector(".discount").classList.add("discount");
