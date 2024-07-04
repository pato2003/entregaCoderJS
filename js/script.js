const personas = []

const primero = {
    nombre: "Primero",
    materias: ["matematica 1", "ingles 1", "fisica 1", "quimica 1", "plastica", "educacion fisica", "musica"]
}

const segundo = {
    nombre: "Segundo",
    materias: ["matematica 2", "ingles 2", "fisica 2", "quimica 2", "plastica", "educacion fisica", "historia", "geografia"]
}

const tercero = {
    nombre: "Tercero",
    materias: ["matematica 3", "ingles 3", "fisica 3", "quimica 3", "economia", "educacion fisica", "historia", "geografia"]
}

const cursos = [primero, segundo, tercero]




const registrarPersona = () =>{
    const apeynom = () => {
        let nombreyape = prompt("Ingrese su Nombre y Apellido (en ese orden):")
        while (nombreyape.length==0) {
            nombreyape = prompt("Dato ingresado invalido. Ingrese su Nombre y Apellido (en ese orden):")
        }
        return nombreyape
    }
    
    const dni = () =>{
        let dni = parseInt(prompt("Ingrese su DNI:"))
        while (dni<0) {
            dni = parseInt(prompt("Dato ingresado inválido. Ingrese su DNI (sin puntos):"))
        }
        return dni
    }
    
    const curso = () =>{
        let curso =parseInt(prompt("Ingrese el numero del curso del alumno:\n1)_ Primero\n2)_ Segundo\n3)_ Tercero"))
        while (curso<1||curso>3) {
            curso =parseInt(prompt("Dato ingresado inválido. Ingrese el numero del curso del alumno:\n1)_ Primero\n2)_ Segundo\n3)_ Tercero"))
        }
        return curso 
    }

    let persona = {apeynom: apeynom(), dni:dni(), curso: cursos[curso()-1]}
    personas.push(persona)

    return personas.indexOf(persona)
}

const iniciarSesion = () =>{
    let dni = parseInt(prompt("Ingrese su DNI:"))
    if (existePersona(dni)===-1) {
        alert("No existe ningun alumno con ese DNI")
    }
    return existePersona(dni)
}


function existePersona(dni) {
    let retorno = -1
    for (const persona of personas) {
        if (persona.dni === dni) {     //No se como puedo obtener el valor de la propiedad dni perteneciente a cada persona del array personas
            return personas.indexOf(persona);
        }
    }
    return retorno
}



const opcion =()=>{
    let option = parseInt(prompt("Ingrese el numero de la acción que desea realizar:\n1)_ Ingresar a su cuenta\n2)_ Crear una cuenta\n3)_ Ver materias de un curso\n4)_ Ver los alumnos inscriptos\n5)_ Salir"))
    while (1>option||option>5) {
        alert("Opción invalida, intente nuevamente.")
        option = parseInt(prompt("Ingrese el numero de la acción que desea realizar:\n1)Ingresar a su cuenta\n2)Crear una cuenta\n3)_ Ver materias de un curso\n4)_ Ver los alumnos inscriptos\n5)_ Salir"))
    }
    return option
}

function menu() {
    let index
    let salir = true
    while (salir === true) {
        switch (opcion()) {
            case 1:
                index = iniciarSesion()
                if (index!=-1) {
                    sesionIniciada(index)
                }
                break;
            case 2:
                index = registrarPersona()
                sesionIniciada(index)
                break;
            case 3:
                let curso = parseInt(prompt("Ingrese el numero del curso:\n1)_ Primero\n2)_ Segundo\n3)_ Tercero"))
                verMaterias(curso)
                salir = false
                break;
            case 4:
                verAlumnos()
                salir = false
                break;
            case 5:
                salir = false
                alert("Gracias por elegirnos. Hasta pronto!")
                break;
        }
    }    
}

function sesionIniciada(index) {
    alert(`Te damos la bienvenida ${personas[index].apeynom} de ${personas[index].curso.nombre}`)
    alert("Pronto se van a añadir nuevas funcionalidades!!!!")
}

function verMaterias(curso){
    while (curso<1||curso>3) {
        curso = parseInt(prompt("Dato ingresado inválido. Ingrese el numero del curso del alumno:\n1)_ Primero\n2)_ Segundo\n3)_ Tercero"))
    }
    console.log(cursos[curso])
    alert("En la consola se muestran las materias del curso seleccionado. Salga del menu para verlas")
}

function verAlumnos() {
    alert("En la consola se muestran los alumnos inscriptos. Salga del menu para verlos")
    console.log(personas)
}




// INICIO

menu()

