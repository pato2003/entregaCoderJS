
function addFunctions(){
    const categorias = document.querySelectorAll(".contenedor-categoria a")
    categorias.forEach((categoria)=>{
        categoria.onclick = (e) => {
            let selectedCategory = []
            if (e.currentTarget.id == "todas") {
                selectedCategory = ["remeras","camisas","jeans"]
            }else{
                selectedCategory = [e.currentTarget.id]
            }
            localStorage.setItem("selectedCategory", JSON.stringify(selectedCategory))
        }
    })
    
}

// INICIO

addFunctions()