fetch("https://kea-alt-del.dk/t7/api/products")
.then(res=>res.json())
.then(showProducts)


function showProducts(products){
//looper og kalder showProduct
products.forEach(showProduct)
}

function showProducts(product){
    console.log(product);
    //fange template
    const template = document.querySelector("smallProductTemplate").textContent;
    //lav en kopi
    const copy = template.cloneNode(true);
    //aendre indhold
copy.querySelector("h3").textCoontent=product.productdisplayname;
if(product.soldout){
    //produktet er udsolgt
    copy.querySelector("article").classList.add("soldOut")
}
    //appende
    document.querySelector("main").appendChild(copy)

    }