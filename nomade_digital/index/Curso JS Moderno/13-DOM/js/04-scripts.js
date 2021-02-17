//query selector
//selecciona el primer elemento que encuentre con esa clase

//sintaxis parecida a la de css
const card = document.querySelector('.card');
console.log(card);

//se puede tener selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

//seleccionar el segundo elemento de cards
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);


//seleccionar un id con queryselector
//si hay dos id, tambien me selecciona el primero
const formulario = document.querySelector('#formulario');
console.log(formulario)


//seleccionar elementos html
const navegacion = document.querySelector('nav');
console.log(nav);