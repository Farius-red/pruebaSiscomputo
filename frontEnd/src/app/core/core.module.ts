import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosService } from './services/usuarios.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ UsuariosService],
})
export class CoreModule { }
