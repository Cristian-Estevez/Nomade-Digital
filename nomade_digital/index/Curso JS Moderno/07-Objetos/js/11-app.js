const nombre = 'tv 20 pulgadas';
const precio = '20';

const producto = {
    nombre: 'monitor de 20 pulgadas', //aca tiene que ser una coma si o si
    precio: 20,
    disponible: true,
    mostrarInfo: function(){
        console.log(`el producto ${nombre} tiene un precio de $ ${precio}`);
    }    
}

producto.mostrarInfo();

//palabra reservada this, para acceder a variables dentro de un objeto
//en la funcion del objeto anterior, las variables que toma el objeto, son las dos de afuera,nombre y precio
//con this toma las propiedades del mismo objeto

const auto = {
    marca: 'auto mercedes',
    año: "1992",
    color: 'rojo',
    infoAuto: function(){
        console.log(`el producto ${this.marca} es del año ${this.año}`)
    }
}

auto.infoAuto();

