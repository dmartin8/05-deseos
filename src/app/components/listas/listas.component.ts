import { Component, Input, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @Input() terminada = true;
  constructor( public deseosService: DeseosService,
               private router: Router) {}
  ngOnInit() {}

listaSeleccionada(lista: Lista){
console.log( lista );
// if (this.terminada === true) es lo mismo que:
if (this.terminada ){
  this.router.navigateByUrl(`tabs/tab2/agregar/${ lista.id }`);
}else {
  this.router.navigateByUrl(`tabs/tab1/agregar/${ lista.id }`);
}

}


}
