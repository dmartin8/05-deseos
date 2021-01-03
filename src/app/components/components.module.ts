// NgModule SIEMPRE esta
import { NgModule } from '@angular/core';
// CommonModule: para ngIf y ngFor
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';

// se DECLARAN los componentes que utilizan el modulo. Agregar lógica de los componentes
// y así solo sera necesario importar el modulo y no todos los servicios y demas
@NgModule({

  declarations: [ListasComponent],
  // Para utilizar con el modulo de forma externa (ejemplo en tab1.page): (+Decalrar, encima)
  exports: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule {
}
