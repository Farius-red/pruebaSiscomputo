import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearUsuaWorkingDogComponent } from './componentes/crudusuarios/crear-usua-working-dog/crear-usua-working-dog.component';
import { ListaClientesComponent } from './componentes/crudusuarios/lista-clientes/lista-clientes.component';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';


const routes: Routes = [
  {
    path: '',
    component: IndexPortafolioComponent,
    children: [
      { path: 'listaUsuarios', component: ListaClientesComponent },
      { path: 'crearUsuario', component: CrearUsuaWorkingDogComponent },
      { path: 'crearUsuario/:id', component: CrearUsuaWorkingDogComponent },
      // Crud Productos
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPortafolioRoutingModule { }
