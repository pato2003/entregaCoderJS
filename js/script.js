
const articulos =[
    {
        id: 0,
        nombre: "Camisa",
        precio: 1500,
        descripcion: "Camisa de la institucion para el horario de clases en aula",
        img: "img/remera.png",
        stock: 100
    },
    {
        id: 1,
        nombre: "Pantalón",
        precio: 2000,
        descripcion: "Pantalón de la institucion para el horario de clases en aula",
        img: "img/pantalon.jpeg",
        stock: 100
    },
    {
        id: 2,
        nombre: "Remera Educación Física",
        precio: 1700,
        descripcion: "Remera de la institucion para el horario de clases de la materia Educación Física",
        img: "img/remeradeportiva.jpeg",
        stock: 100
    },
    {
        id: 3,
        nombre: "Short Educación Física",
        precio: 1200,
        descripcion: "Short de la institucion para el horario de clases de la materia Educación Física",
        img: "img/shortdeportivo.jpeg",
        stock: 100
    },
];


const cardsContainer = document.getElementById("cards-container");

for (const articulo of articulos) {
    const article = document.createElement("article");
    article.className = "card m-4";
    article.innerHTML = `<img src=${articulo.img} class="card-img-top" alt="...">
                        <section class="card-body">
                            <h4 class="card-title">${articulo.nombre}     -    $${articulo.precio}</h4>
                            <p class="card-text">${articulo.descripcion}</p>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </section>`;
    article.style.width = "35%"
    cardsContainer.appendChild(article);
}