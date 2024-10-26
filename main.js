import { Base } from "./Base.js";
import { Ruta } from "./ruta.js";

let ruta = new Ruta()
let nuevo = new Base('Cuernavaca',12)
ruta.agregar(nuevo)
nuevo = new Base('Morelos',21)
ruta.agregar(nuevo)
nuevo = new Base('Tenochtitlan',14)
ruta.agregar(nuevo)
nuevo = new Base('Hidalgo',15)
ruta.agregar(nuevo)
// ruta.eliminar('Morelos')

// console.log(ruta.buscar('Tenochtitlan'))

// console.log(ruta.primero)
console.log('Bases :'+ '\n' + ruta.listar()+ '\n')
console.log(ruta.crearRuta('Cuernavaca', 100))