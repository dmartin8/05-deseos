import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
// Private o nada(publica)
  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();

    // const lista1 = new Lista('Recolectar piedras del infinito');
    // const lista2 = new Lista('Héroes a desaparecer');

    // this.listas.push(lista1, lista2);

  }

  crearLista(titulo: string){
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
    // Sacamos return del id para poder usar el routing en anyadir
    return nuevaLista.id;
  }

  obtenerLista( id: string | number ){
    // necesitamos estar seguros de que el id sea un numero:
    id = Number(id);
    return this.listas.find( listaData => listaData.id === id);
    // Al ser funcion de flecha lo hemos resumido de:
    // return this.listas.find( listaData => {
    //   return listaData.id === id;
    // });

  }

  guardarStorage(){

    localStorage.setItem('data', JSON.stringify(this.listas));

  }

  cargarStorage(){
    if (localStorage.getItem('data')) {
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
      // Para aclarar, pero ya estaba en listas: Lista[] = []
    }
  }
}
