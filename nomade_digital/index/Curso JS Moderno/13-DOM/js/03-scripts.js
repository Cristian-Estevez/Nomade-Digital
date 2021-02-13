// getElementById

elemento = document.forms[0].id; //no se porque no usa esta forma

const formulario = document.getElementById('formulario');
console.log(formulario);//selecciona el primer id con ese nombre que encuentre, a diferencia del classname


const noExiste = document.getElementById('no-existe');
console.log(noExiste); //retorna un NULL

