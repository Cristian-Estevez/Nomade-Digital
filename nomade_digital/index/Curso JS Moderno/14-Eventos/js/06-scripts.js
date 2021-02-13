//event bubbling
//cuando el evento se propaga y pasan cosas no esperadas

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', () => {
    console.log('click en card');
});

cardinfo.addEventListener('click', () => {
    console.log('click en info');
});

titulo.addEventListener('click', () => {
    console.log('click en titulo');
});

//en estos casos si le doy click a card, me van a aparecer click en titulo y en info
//es decir, se propaga el evento

//evitar el event bubbling con stopPropagation
cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en card');
});

cardinfo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
});

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});