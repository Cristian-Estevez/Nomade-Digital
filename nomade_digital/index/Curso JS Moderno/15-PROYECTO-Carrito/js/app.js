//crear la funcionalidad al carrito de compras
// para comentar, primero hay que elegir todos los elementos. acceder a ellos a traves de un listener cuando le demos click
// al boton agregar a la lista. despues con target hay que ir sacando la info del card en general y despues el traversing de DOM
// para ir seleccionando todos los elemento.
// creamos el objeto con todos los elementos que vamos a necesitar, con el traversing vamos a ir accediendo a ellos
//primero crear las variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody'); //arrow en el que se van a agregar
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');//btn para vaciar
const listaCursos = document.querySelector('#lista-cursos'); //desde donce se produce el listener
//agregamos el array para poner los articulos
let articulosCarrito = [];

//para tener mas prolijo, crea una funcion con todos los eventos
cargarEventlisteners();
function cargarEventlisteners() {
    //Para cuando le doy a 'agregar al carrito'
    listaCursos.addEventListener('click', agregarCurso);//le agregamos la fucion agregarcurso

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteamos el arreglo

        limpiarHTML(); //volvemos a darle funcionalidad a la funcion de agregar el html
    });
}


//funciones
function agregarCurso(e) {
    e.preventDefault();//cuando le doy click a un enlace sin href por defecto me lleva al principio de la pagina, esto es para que no pase eso
    if( e.target.classList.contains('agregar-carrito') ) {
        // console.log('agregando al carrito');hacer esto para ver que funcione
        // console.log(e.target.parentElement.parentElement); //para saber a que le estamos dando
        
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');

        // elimina del arreglo de articulosCariito por el data-id
        articulosCarrito = articulosCarrito.filter ( curso => cursoId !== cursoId );

        //itera sobre el carrito y muestra su HTML , es dedir, tenemos el carrito nuevo sin ese producto eliminado
        carritoHTML()
    }
    console.log(eliminarCurso)
}


//lee el contenido del HTML al que le dimos click y extrae la info del curso
function leerDatosCurso(curso) {
    //   console.log(curso);

    //crear un objeto con el contenido del curso actual
    //cosas que vamos a extraer que nos hacen falta para armar el carrito
     const infoCurso = {
        imagen: curso.querySelector('img').src, //extraigo datos de la imagen
        titulo: curso.querySelector('h4').textContent, //extraigo datos del titulo
        precio: curso.querySelector('.precio span').textContent, //extraer el precio
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //revisa si un elemento ya existe en el carrito con .some
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if(existe) {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                return curso; //retorna el objeto actualizado
            } else {
                return curso; //retorna los objetos que no son duplicados
            }
        })
        articulosCarrito = [...curso];
    } else {
        // agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];

    }


    // agrega elementos al arreglo de carrito
    //usamos el spread operator, para que primero registre el primer articulo que seleccionamos
    //despues con los ... copia el anterior arreglo y agrega el nuevo pulsado, que es infocurso
    //articulosCarrito = [...articulosCarrito, infoCurso];
    //console.log(articulosCarrito);

    carritoHTML()
 }


 //muestra el carrito de compras en el HTML
 function carritoHTML() { //la mandamos llamar despues de leer los datos del curso
    
    //limpia el HTML para que no cuente de nuevo la misma lista. Es decir, borra la lista anterior y reproduce la nueva
    limpiarHTML();
    

    //recorre el carrito y genera el HTML
    //abajo esta el codigo mas entendible
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr'); //tener en cuenta que en el HTML hay un tbody , por eso le creamos rows
        row.innerHTML = 
        //ver que en la imagen tenemos que abrir la etiqueta de img    
        `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>

        `

        //agrega el HTML del carrito en el body
        contenedorCarrito.appendChild(row);
    })
 }

 //eliminar los cursos del tbody para que vuelva a reproducir la lista de cursos elegidos sin repeticion de la anterior
 function limpiarHTML() {
     //forma lenta de eliminar el HTML previo
    //  contenedorCarrito.innerHTML = '';

    //forma rapida con while

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        //se va a ejecutar este borrado siempre que haya un hijo en el contenedor tbody, es decir en el trow
        //entonces cuando no queden elementos, se ejecuta la lista
    }
}




// articulosCarrito.forEach( curso => {
//     const row = document.createElement('tr'); //tener en cuenta que en el HTML hay un tbody , por eso le creamos rows
//     row.innerHTML = 
//     //ver que en la imagen tenemos que abrir la etiqueta de img    
//     `
//         <td>
//             <img src="${curso.imagen}" width="100">
//         </td>
//         <td>${curso.titulo}</td>
//         <td>${curso.precio}</td>
//         <td>${curso.cantidad}</td>
//         <td>
//             <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
//         </td>

//     `

//     //agrega el HTML del carrito en el body
//     contenedorCarrito.appendChild(row);
// })
// }