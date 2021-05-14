import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPortafolioRoutingModule } from './daskBoard-routing.module';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';

import { MaterialModule } from '../material/material.module';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';



import { ModalDeleteUComponent } from './componentes/crudusuarios/modal-delete-u/modal-delete-u.component';
import { ConfirmacionComponent } from './componentes/crudusuarios/confirmacion/confirmacion.component';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';
import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IndexPortafolioComponent,
    NavegacionComponent,
    FooterComponent,

    CuerpoComponent,
    ConfirmacionComponent,
    CrearUsuaWorkingDogComponent,
    ListaClientesComponent,

    // modales
    ModalDeleteUComponent,
    ConfirmacionComponent,


  ],
  imports: [
    CommonModule,
    IndexPortafolioRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  entryComponents: [ModalDeleteUComponent, ConfirmacionComponent],
})
export class DaskBoardModule { }
