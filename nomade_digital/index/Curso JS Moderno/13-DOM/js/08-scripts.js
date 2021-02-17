// TRAVERSING THE DOM

//recorrer html a traves de js,con el dom
const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);

//tambien se puede acceder al primer y ultimo elemento de la navegacion
// const primerEnlace = document.querySelector('.navegacion')
// primerEnlace.children[0].textContent = 'no vender'
// console.log(primerEnlace)

// console.log(navegacion.firstElementChild);
// console.log(navegacion.lastElementChild);

// console.log(navegacion.childNodes); //losespacios en blanco son considerados elementos
// console.log(navegacion.children); //los espacios en blanco son considerados elementos


console.log(navegacion.children[1].nodeName);//me arroja que elemento es el nodo
console.log(navegacion.children[1].nodeType);//me arroja un numero y me dice de que tipo es, ver firefox developer

const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'nuevo heading desde traversing dom';

// console.log(card.children[1].children[1].textContent);

 //cambiar una imagen
// card.children[0].src = 'img/hacer4.jpg';
// console.log(card.children[0]);


 //traversing del hijo al padre

// console.log(card.parentNode); //forma menos segura, ya que puede que no se vea todo
// console.log(card.parentElement.parentElement); //cada vez que pongo parent element me va seleccionando el padre de cada elmeento

//tambien estan los hermanos, un padre tiene muchos hermanos, cards en este caso
console.log(card);
console.log(card.nextElementSibling.nextElementSibling); //me lleva al hermano que lesigue, si pongo de nuevo me vuelve a llevar al siguiente

//para volver, esta previous
const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);