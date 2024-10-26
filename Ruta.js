export class Ruta {
    constructor() {
        this.primero = null;
    }
    agregar(nuevo) {
        let aux = this.primero;
        
        if (aux){
            if(aux.siguiente == this.primero){
                aux.siguiente = nuevo;
                nuevo.siguiente = aux;
            }else{
                while(aux.siguiente != this.primero){
                    aux = aux.siguiente;
                }
                aux.siguiente = nuevo;
                nuevo.siguiente = this.primero;
            }
        }else{
            this.primero = nuevo;
            nuevo.siguiente = nuevo;
        }
    }
    buscar(nombreBase){
        let aux = this.primero;
        if(aux){
            while(aux != null && aux.nombre != nombreBase ){
                aux = aux.siguiente;
            }
        }
        return aux;
    }
    eliminar(nombreBase){
        let aux = this.primero;
        if(aux){
            if(aux.nombre == nombreBase && aux.siguiente == aux )
                this.primero = null;
            else{
                if(aux.nombre == nombreBase && aux.siguiente.siguiente == aux){
                    this.primero = aux.siguiente;
                    aux.siguiente = this.primero;
                }
                else{
                    while(aux.siguiente != this.primero && aux.siguiente.nombre != nombreBase ){
                        aux = aux.siguiente;
                    }
                    if(aux.siguiente.nombre == nombreBase)
                        aux.siguiente = aux.siguiente.siguiente;
                }
            }
        }
    }
    listar(){
        let aux = this.primero;
        let resultado = '';
        if(aux){
            if(aux.siguiente == aux){
                resultado = aux.nombre;
            }else{
                while(aux.siguiente != this.primero){
                    resultado += aux.nombre + "\n";
                    aux= aux.siguiente;
                }
                resultado += aux.nombre;
            }
        }
        return resultado;
    }
    crearRujta(){

    }

}