const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,

}

const medidas = {
    peso: "1kg",
    medida: "1m",
}

console.log(producto);
console.log(medidas);


//juntar los dos objetos
const resultado = Object.assign(producto, medidas);

console.log(resultado);

//otra forma de hacerlo con spread o rest operator
const resultado2 = { ...producto, ...medidas};
//los tres puntos significa copiar

console.log(resultado2);