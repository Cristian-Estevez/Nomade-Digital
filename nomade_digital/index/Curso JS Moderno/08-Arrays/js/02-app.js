const numeros = [1, 2, 3, [10, 20, 30]];

console.log(numeros);
//en el caso de que sea un arreglo mas complejo, se puede visualizar mejor con table
console.table(numeros);

//acceder a un elemento de arreglo
console.log(numeros[1]);
//si trato de acceder a un numero que no exist eme sale error

//acceder a un array dentro de un array
console.log(numeros[3][1]);
