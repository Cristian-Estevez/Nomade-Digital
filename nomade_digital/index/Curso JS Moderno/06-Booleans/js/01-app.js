const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean1);

console.log(typeof boolean1);

//en este caso con el operador de igualdad simple, tira un true
//aunque sean de distintos tipos
console.log(boolean1 == boolean3);

const boolean4 = new String(true);
console.log(typeof boolean4); 
//usualmente las new string crean objetos
console.log(boolean4);