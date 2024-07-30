let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
console.log(cartProducts)
const cartContainer = document.getElementById("cart-container");
const clearButton = document.getElementById("clearCart");
const totalContainer = document.getElementById("totalCompra");




renderCart(cartProducts);
clear();

function renderCart(cartProducts) {
    for (const producto of cartProducts){
        const article = document.createElement("article");
        article.className = "m-2 border border-secondary-subtle w-100 d-flex flex-row align-items-center";
        article.innerHTML = `<img src=${"../"+producto.img} alt="..." class ="m-1" style = "height: 7rem">
                            <section class = "ms-3">
                                <h4 class="fs-3">${producto.nombre}     -    $${producto.precio}</h4>
                                <p> Cantidad: ${producto.cantidad}</p>
                            </section>`;
        article.style.width = "35%"
        cartContainer.appendChild(article);
    };
    calculoTotal();
}

function clear() {
    clearButton.onclick = () =>{
        localStorage.clear();
        cartContainer.innerHTML = "";
        totalContainer.innerText = "0"
    }
    
}

function calculoTotal() {
        let total = cartProducts.reduce((acumulador,producto) => acumulador + (producto.cantidad * producto.precio), 0);
        totalContainer.innerText = `${total}`        
}
