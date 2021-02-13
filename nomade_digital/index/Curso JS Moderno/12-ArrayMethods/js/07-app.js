//CONCAT, permite unir dos arreglos
//SPREAD OPERATOR

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre'];


//concat
const resultado = meses.concat(meses2, meses3, 'Otro mes');

console.log(resultado)

//spread operator
const resultado2 = [...meses, ...meses2, ...meses3, 'Otro mes'];//importante ponerlo sin los tres puntos porque sino me pone un elemento por cada letra

console.log(resultado2)