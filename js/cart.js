let cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
console.log(cartProducts)
const cartContainer = document.getElementById("cart-container");
const clearButton = document.getElementById("clearCart");
const totalContainer = document.getElementById("totalCompra");



clear();
renderCart(cartProducts);

function renderCart(cartProducts) {
    if(cartProducts){
        cartContainer.innerHTML="";
        for (const producto of cartProducts){
            const article = document.createElement("section");
            article.className = "producto-carrito";
            article.innerHTML = `<img src=${"../"+producto.img} alt="..." class ="m-1 producto-carrito-imagen">
                                <section class = "producto-carrito-cuerpo">
                                <h4 class="fs-3">${producto.nombre}     -    $${producto.precio}</h4>
                                <p> Cantidad: ${producto.cantidad}</p>
                                </section>
                                <section class = "producto-carrito-acciones" id = "${producto.id}">
                                    <button class ="btn btn-outline-secondary fs-5 fw-bold btnResta" style = "width: 2.5rem;">- </button>
                                    <button class ="btn btn-success fs-5 me-4 fw-bold btnSuma" style = "width: 2.5rem;">+ </button>
                                    <button class ="btn btn-outline-danger fs-5 fw-bold btnDelete"><i class="bi bi-trash"></i></button>
                                </section>`;
            cartContainer.appendChild(article);
        }
    }
    btnFunciones();
    calculoTotal();
}

function clear() {
    clearButton.onclick = () =>{
        localStorage.clear();
        cartContainer.innerHTML = "";
        cartProducts = [];
        calculoTotal();
    }
    
}

function calculoTotal() {
    if (cartProducts && cartProducts.length>0) {
        total = cartProducts.reduce((acumulador,producto) => acumulador + (producto.cantidad * producto.precio), 0);
        totalContainer.innerText = `${total}`        
    } else {
        cartContainer.innerHTML = "<h2>Su Carrito está vacío, regrese a la pagina de inicio para incluir productos.</h2>"
        totalContainer.parentElement.innerHTML="";
    }
}

function btnFunciones() {
    let deleteBtn = document.querySelectorAll(".btnDelete");
    deleteBtn.forEach(boton =>{
        boton.onclick = (e) =>{
            let productID = parseInt(e.currentTarget.parentElement.id);
            cartProducts = cartProducts.filter((producto) => producto.id != productID)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            renderCart(cartProducts)
        }
    })

    let btnSuma = document.querySelectorAll(".btnSuma");
    btnSuma.forEach(boton =>{
        boton.onclick = (e) =>{
            let productID = parseInt(e.currentTarget.parentElement.id);
            cartProducts.forEach(producto => {
                if (producto.id == productID) {
                    producto.cantidad++;
                }
            });
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            renderCart(cartProducts)
        }
    })

    let btnResta = document.querySelectorAll(".btnResta");
    btnResta.forEach(boton =>{
        boton.onclick = (e) =>{
            let productID = parseInt(e.currentTarget.parentElement.id);
            cartProducts.forEach(producto => {
                if (producto.id == productID) {
                    producto.cantidad--;
                }
            });
            cartProducts = cartProducts.filter((producto) => producto.cantidad > 0)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
            renderCart(cartProducts)
        }
    })


}
