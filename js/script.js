const cardsContainer = document.getElementById("cards-container");
let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
let articulos = []

function renderProductos(productsListSource) {
    cardsContainer.innerHTML=""
        fetch(productsListSource)
        .then(response => response.json())
        .then(data => {
            data.forEach(articulo => {
                const article = document.createElement("article");
                article.className = "tarjeta m-3";
                article.innerHTML = `<figure>
                                        <img src=${articulo.img} alt="...">
                                    </figure>
                                    <section class="tarjeta-cuerpo d-flex flex-column">
                                        <p class="card-price">$${articulo.precio}</p>
                                        <h4 class="card-title">${articulo.nombre}</h4>
                                        <article class = "mt-2 d-flex flex-row">
                                            <button class="btn btn-primary rounded-pill productoAgregar"  id="${articulo.id}">Agregar al carrito</button>
                                            <section class="ms-auto flex-row align-items-center btn-container" id="btnContainer${articulo.id}">
                                                <button class ="btn p-1 rounded-pill btn-outline-secondary fw-bold btnResta" id="resta${articulo.id}" style = "width: 2rem;">- </button>
                                                <p class ="px-2 my-auto cant-container" id = "cantContainer${articulo.id}"></p>
                                                <button class ="btn p-1 btn-success rounded-pill fw-bold btnSuma" id="suma${articulo.id}" style = "width: 2rem;">+ </button>
                                            </section>
                                        </article>
                                    </section>`;
                article.style.width = "25%"
                cardsContainer.appendChild(article);
            })
            articulos = data;
            refreshCant(cart)
            addToCart()
        })
}





function addToCart() {
    let addButtons = document.querySelectorAll(".productoAgregar");
    let btnSuma = document.querySelectorAll(".btnSuma");
    let btnResta = document.querySelectorAll(".btnResta");

    addButtons.forEach(button =>{
        button.onclick = (e) => {
            let productID = e.currentTarget.id;
            let selectedProduct = articulos.find(articulo => articulo.id == productID);
            if (cart.length > 0 && cart.some((producto) => producto.id == productID)) {
                let listaProductos = cart.map((producto) =>{
                    if(producto.id==selectedProduct.id){
                        producto.cantidad++;
                        return producto;
                    }
                    else{
                        producto.cantidad++;
                        return producto
                    }
                })
                cart = listaProductos;
            }
            else{
                selectedProduct.cantidad++;
                cart.push(selectedProduct);
            }
            refreshCant(cart);
            localStorage.setItem("cartProducts", JSON.stringify(cart))
        }
    })

    btnSuma.forEach(boton =>{
        boton.onclick = (e) =>{
            let elementID = e.currentTarget.id;
            cart.forEach(producto => {
                if (elementID.includes(`${producto.id}`)) {
                    producto.cantidad++;
                }
            });
            refreshCant(cart)
            localStorage.setItem("cartProducts", JSON.stringify(cart))
        }
    })

    btnResta.forEach(boton =>{
        boton.onclick = (e) =>{
            let elementID = e.currentTarget.id;
            cart.forEach(producto => {
                if (elementID.includes(`${producto.id}`)) {
                    producto.cantidad--;
                }
            });
            refreshCant(cart)
            localStorage.setItem("cartProducts", JSON.stringify(cart))
        }
    })
    
}

function refreshCant(cart) {
    cart.forEach(producto => {
        const contenedorCantidad = document.getElementById(`cantContainer${producto.id}`);
        const contenedorBotones = document.getElementById(`btnContainer${producto.id}`);
        if (producto.cantidad == 0) {
            contenedorBotones.style.display = "none";
        }
        else{
            contenedorBotones.style.display = "flex";
            contenedorCantidad.innerText = `${producto.cantidad}`
        }
    });
}


// INICIO

renderProductos("./db/data-base.json")

