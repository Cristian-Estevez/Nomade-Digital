const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//revisar si dos numeros son iguales
console.log(numero1 == numero3);
//JS no se fija si es entero o string, por eso "20" es igual a 20
console.log(numero1 == numero2);

//operador estricto
//al poner === se fija tambien en el tipo de dato, entonces como no son 
//los mismos datos, tira un false
console.log(numero1 === numero2);

console.log(typeof numero1);
console.log(typeof numero2);

//convertir a str en la misma operacion
console.log(numero1 === parseInt(numero2));


//operador de diferencia, diferente
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2);

//operador estricto, es con un igual  mas
console.log(numero1 !== numero2);