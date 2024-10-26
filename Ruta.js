export class Ruta {
    constructor() {
        this.primero = null;
    }
    agregar(nuevo) {
        let aux = this.primero;
        
        if (aux){
            nuevo.anterior = aux.anterior;
            aux.anterior.siguiente = nuevo;
            aux.anterior = nuevo;
            nuevo.siguiente = aux;
        }else{
            nuevo.siguiente = nuevo;
            nuevo.anterior = nuevo;
            this.primero = nuevo;
        }
    }
    buscar(nombreBase){
        let aux = this.primero;
        if(aux){
            while(aux.siguiente != this.primero && aux.nombre != nombreBase ){
                aux = aux.siguiente;
            }
        }
        return aux.nombre == nombreBase ? aux : null;
    }
    eliminar(nombreBase){
        let aux = this.primero;
        if(aux){
            if(aux.nombre == nombreBase){
                if(aux.siguiente == this.primero)
                    this.primero = null;
                else {
                    this.primero = aux.siguiente;
                    aux.anterior.siguiente = aux.siguiente;
                    aux.siguiente.anterior = aux.anterior;
                }
            }
            else{
                while(aux.siguiente != this.primero && aux.nombre != nombreBase ){
                        aux = aux.siguiente;
                }
                if(aux.nombre == nombreBase){
                        aux.anterior.siguiente = aux.siguiente;
                        aux.siguiente.anterior = aux.anterior;
                }
            }
        }
    }
    agregarInicio(nuevo){
        let aux = this.primero;

        if (aux){
            aux.siguiente.anterior = nuevo;
            nuevo.siguiente = aux.siguiente;
            nuevo.anterior = aux;
            aux.siguiente = nuevo;
            this.primero = aux.siguiente;

        }else{
            this.primero = nuevo;
            nuevo.siguiente = nuevo;
            nuevo.anterior = nuevo;
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
    crearRuta(baseInicio, minutosTrabajados){
        let aux = this.buscar(baseInicio);
        let texto = '';
        let minutosAcumulados = null;
        if(aux){
           while (minutosTrabajados - aux.siguiente.minutos > 0){
                aux = aux.siguiente;
                minutosTrabajados -= aux.minutos;
                minutosAcumulados += aux.minutos;
                texto += `Base: ${aux.nombre} Minutos acumulados: ${minutosAcumulados} \n`;
            }
        }
        return texto;
    }

}