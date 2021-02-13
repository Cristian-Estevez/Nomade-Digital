//cambiar css

const encabezado = document.querySelector('h1');

//aquellos atributos con guion al medio, se elimina el guion y sepone la letra en mayuscula
//justify-content = justifyContent
//accedemos a las propiedades por la sintaxis de punto

encabezado.style.backgroundColor = 'red';
encabezado.style.fontSize = '1.8rem';


//acceder a una clase
const card = document.querySelector('.card');
//añadir una clase con funcion add
card.classList.add('nueva-clase', 'segunda-clase');
//eliminar una clase con funcion remove
card.classList.remove('nueva-clase');
console.log(card);