import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models/lista.model';
import { compileNgModule } from '@angular/compiler';
import { NgControlStatusGroup } from '@angular/forms';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem: ''; // Para agregarItem; ademas lo agregamos en agregar.page.html
  constructor( private deseosService: DeseosService,
              // Aqui tenemos que leer el id de la lista para poder utilizar el metodo obtenerLista
               private route: ActivatedRoute ) {
    // snapshot para no generar un observable:
    const listaId = this.route.snapshot.paramMap.get('listaId');
    console.log(listaId);

    this.lista = this.deseosService.obtenerLista( listaId );
    // console.log(this.lista);
  }

  ngOnInit() {
  }

  agregarItem() {
    // Primero validacion, no quiero items sin nombre
    if (this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push( nuevoItem );
    this.nombreItem = '';
    // IMPORTANTE:
    this.deseosService.guardarStorage();
  }

  cambioCheck( item: ListaItem ){

    // Hacer validacion o filtro del arreglo y dime cuantos son
    const pendientes = this.lista.items
                            .filter( itemData => !itemData.completado)
                            .length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }

    // console.log({pendientes});
  // IMPORTANTE:
    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
  }

  borrar(i: number){
    this.lista.items.splice( i, 1 );
    this.deseosService.guardarStorage();
  }
}
