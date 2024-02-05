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
  //appende
  document.querySelector("main").appendChild(copy);
}

//produktet rabat
//copy.querySelector(".discounted").textContent = product.discount;
//if (product.discount) {
//produktet er nedsat
//copy.querySelector(".discount").classList.add("discount");
