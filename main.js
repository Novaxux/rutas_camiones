import { Base } from "./Base.js";
import { Ruta } from "./ruta.js";

let ruta = new Ruta()
let nuevo = new Base('Cuernavaca',12)
ruta.agregar(nuevo)
nuevo = new Base('Morelos',20)
ruta.agregar(nuevo)
ruta.eliminar('Cuernavaca')
// nuevo = new Base('Tenochtitlan',12)
// ruta.agregar(nuevo)

console.log(ruta.primero)
// console.log(ruta.listar())