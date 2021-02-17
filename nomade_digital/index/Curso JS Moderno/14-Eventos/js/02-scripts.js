//eventos con el mouse

//primero seleccionar el elemento con el cual se va a trabajar

const nav = document.querySelector('.navegacion');

//registrar elevento
// nav.addEventListener('click', () => {
//     console.log('click en navegacion')
// })
//se pueden añadir otros eventos, las funciones son anonimas
//las podemos crearlas en otro lado y añadirlas

//cuando el mouse ingresa en la navegacion
 nav.addEventListener('mouseenter', () => {
     console.log('click en navegacion');

     nav.style.backgroundColor = 'white';
 })

//cuando salgo de navegacion
 nav.addEventListener('mouseout', () => {
     console.log('click en navegacion');

     nav.style.backgroundColor = 'transparent';
 })

 //mousedown es similar al click
 //mouseup cuando suelto el mouse
 //dblclick es un evento al que hay que darle doble click al elemento


