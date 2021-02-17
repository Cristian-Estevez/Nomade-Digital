//modificar elementos del html

// const encabezado = document.querySelector('.contenido-hero h1');
// console.log(encabezado);


//acceder al texto de un elemento
//3 formas

// console.log(encabezado.textContent);//si lo va a encontrar
// console.log(encabezado.innerText);//si ne el css = visibility = hidden; no lo va a encontrar
// console.log(encabezado.innerHTML);// se trae todo el texto y codigo html

//una forma mas corta de acceder al texto en con "chained"

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);


//MODIFICAR EL H1

// document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

//o sino
const nuevoHeading = 'nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


//cambiar unaimagen, ver firefox developer edition

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
