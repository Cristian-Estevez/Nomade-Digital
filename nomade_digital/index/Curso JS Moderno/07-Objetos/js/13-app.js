const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,
       
}
//devuelve un array con las propiedades del objeto
console.log(Object.keys(producto));

//devuelve array con los valores de las propiedades
console.log(Object.values(producto));

//te retorna todo, propiedad y valor
console.log(Object.entries(producto));

