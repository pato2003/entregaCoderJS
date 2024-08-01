
const articulos =[
    {
        id: 0,
        nombre: "Camisa",
        precio: 1500,
        descripcion: "Camisa de la institucion para el horario de clases en aula",
        img: "img/remera.png",
        cantidad: 0
    },
    {
        id: 1,
        nombre: "Pantalón",
        precio: 2000,
        descripcion: "Pantalón de la institucion para el horario de clases en aula",
        img: "img/pantalon.jpeg",
        cantidad: 0
    },
    {
        id: 2,
        nombre: "Remera Educación Física",
        precio: 1700,
        descripcion: "Remera de la institucion para el horario de clases de la materia Educación Física",
        img: "img/remeradeportiva.jpeg",
        cantidad: 0
    },
    {
        id: 3,
        nombre: "Short Educación Física",
        precio: 1200,
        descripcion: "Short de la institucion para el horario de clases de la materia Educación Física",
        img: "img/shortdeportivo.jpeg",
        cantidad: 0
    },
];


const cardsContainer = document.getElementById("cards-container");
let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];


function renderProductos(productsList) {
    cardsContainer.innerHTML=""
    if (productsList) {
        for (const articulo of productsList) {
            const article = document.createElement("article");
            article.className = "card m-4";
            article.innerHTML = `<img src=${articulo.img} class="card-img-top" alt="...">
                                <section class="card-body">
                                    <h4 class="card-title">${articulo.nombre}     -    $${articulo.precio}</h4>
                                    <p class="card-text">${articulo.descripcion}</p>
                                    <article class = "d-flex flex-row">
                                        <button class="btn btn-primary productoAgregar"  id="${articulo.id}">Agregar al carrito</button>
                                        <section class="ms-auto flex-row align-items-center btn-container" id="btnContainer${articulo.id}">
                                            <button class ="btn btn-outline-secondary fw-bold btnResta" id="resta${articulo.id}" style = "width: 2.5rem;">- </button>
                                            <p class ="px-3 my-auto cant-container" id = "cantContainer${articulo.id}"></p>
                                            <button class ="btn btn-success fw-bold btnSuma" id="suma${articulo.id}" style = "width: 2.5rem;">+ </button>
                                        </section>
                                    </article>
                                </section>`;
            article.style.width = "35%"
            cardsContainer.appendChild(article);
        }        
    }
    refreshCant(cart);
    addToCart();
    
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

renderProductos(articulos)

