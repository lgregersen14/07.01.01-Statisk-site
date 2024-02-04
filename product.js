//https://kea-alt-del.dk/t7/api/products
fetch("https://kea-alt-del.dk/t7/api/products")
.then((response=>response.json))
.then((data) => showProduct(data));

function showProduct(data){
    console.log(product);
    document.querySelector(".purchaseBox h1").textContent=product.productdisplayname;
}
