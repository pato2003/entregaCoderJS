let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
console.log(cartProducts)
const cartContainer = document.getElementById("cart-container");
const clearButton = document.getElementById("clearCart");




renderCart(cartProducts);
clear();

function renderCart(cartProducts) {
    for (const producto of cartProducts){
        const article = document.createElement("article");
        article.className = "m-2 border border-secondary-subtle w-100 d-flex flex-row align-items-center";
        article.innerHTML = `<img src=${"../"+producto.img} alt="..." class ="m-1" style = "height: 7rem">
                             <h4 class="fs-3 ms-3">${producto.nombre}     -    $${producto.precio}</h4>`;
        article.style.width = "35%"
        cartContainer.appendChild(article);
    };
}

function clear() {
    clearButton.onclick = () =>{
        localStorage.clear();
        cartContainer.innerHTML = ""
    }
    
}
