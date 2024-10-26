import { Base } from "./Base.js";
import { Ruta } from "./ruta.js";

let ruta = new Ruta()
let nuevo = new Base('Cuernavaca',12)
ruta.agregar(nuevo)
nuevo = new Base('Morelos',20)
ruta.agregar(nuevo)
nuevo = new Base('Tenochtitlan',14)
ruta.agregar(nuevo)
nuevo = new Base('Tecoman',15)
ruta.agregar(nuevo)
// ruta.eliminar('Tenochtitlan')

// console.log(ruta.buscar('Tenochtitlan'))

// console.log(ruta.primero)
// console.log(ruta.listar())
console.log(ruta.crearRuta('Tecoman', 100))