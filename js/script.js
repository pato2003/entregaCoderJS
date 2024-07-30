
const articulos =[
    {
        id: 0,
        nombre: "Camisa",
        precio: 1500,
        descripcion: "Camisa de la institucion para el horario de clases en aula",
        img: "img/remera.png",
        cantidad: 1
    },
    {
        id: 1,
        nombre: "Pantalón",
        precio: 2000,
        descripcion: "Pantalón de la institucion para el horario de clases en aula",
        img: "img/pantalon.jpeg",
        cantidad: 1
    },
    {
        id: 2,
        nombre: "Remera Educación Física",
        precio: 1700,
        descripcion: "Remera de la institucion para el horario de clases de la materia Educación Física",
        img: "img/remeradeportiva.jpeg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Short Educación Física",
        precio: 1200,
        descripcion: "Short de la institucion para el horario de clases de la materia Educación Física",
        img: "img/shortdeportivo.jpeg",
        cantidad: 1
    },
];


const cardsContainer = document.getElementById("cards-container");

function renderProductos(productsList) {
    for (const articulo of productsList) {
        const article = document.createElement("article");
        article.className = "card m-4";
        article.innerHTML = `<img src=${articulo.img} class="card-img-top" alt="...">
                            <section class="card-body">
                                <h4 class="card-title">${articulo.nombre}     -    $${articulo.precio}</h4>
                                <p class="card-text">${articulo.descripcion}</p>
                                <button class="btn btn-primary productoAgregar" id="${articulo.id}">Agregar al carrito</button>
                            </section>`;
        article.style.width = "35%"
        cardsContainer.appendChild(article);
    }
    addToCart();
}



let cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

function addToCart() {
    let addButtons = document.querySelectorAll(".productoAgregar");
    addButtons.forEach(button =>{
        button.onclick = (e) => {
            let productID = e.currentTarget.id;
            let selectedProduct = articulos.find(articulo => articulo.id == productID);
            if (cart.some((producto) => producto.id == productID)) {
                let listaProductos = cart.map((producto) =>{
                    if(producto.id==selectedProduct.id){
                        producto.cantidad = (producto.cantidad + 1);
                        return producto;
                    }
                    else{
                        return producto
                    }
                })
                cart = listaProductos;
            }
            else{
                cart.push(selectedProduct);
            }
        
            localStorage.setItem("cartProducts", JSON.stringify(cart))
        }
    })
}


renderProductos(articulos)

