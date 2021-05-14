import { Component, OnInit, VERSION } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';


import { ModalDeleteUComponent } from '../modal-delete-u/modal-delete-u.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmacionComponent } from '../confirmacion/confirmacion.component';
import { Usuarios } from 'src/app/core/modelos/usuarios/Usuarios.modelo';
import { UsuariosService } from 'src/app/core/services/usuarios.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'listaClientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css'],
})
export class ListaClientesComponent implements OnInit {
  public usuarios: Usuarios[] | undefined;
  verions = VERSION;
  constructor(
    private usuariosW: UsuariosService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  // tslint:disable-next-line:typedef
  listarUsuarios() {
    this.usuariosW.getAllUsuario().subscribe((res) => (this.usuarios = res));
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  async updateCostumer(usu: any) {
    console.log('se dio click en update', usu);
    if (usu) {
      this.usuariosW.usu = usu;
    }
  }

  // tslint:disable-next-line:typedef
  deleteCostumer(id: number) {
    console.log('se dio clic en delete', id);
    this.usuariosW.deleteUsuario(id);
  }



  openMoldal(
    id: number, nombre: string,
    apellido: string, cedula: number,
    telefono: number, edad: number
  ): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'eliminar usu',
      id,
      nombre,
      apellido,
      cedula,
      telefono,
      edad
    };

    const dialogRef = this.dialog.open(ModalDeleteUComponent, dialogConfig);


    dialogRef.afterClosed().subscribe((showSnackBar: boolean) => {
      if (showSnackBar) {

        const a = document.createElement('a');
        a.click();
        a.remove();
        this.snackBar.openFromComponent(ConfirmacionComponent, {
          duration: 2000,
        });
      }
    });
  }
}
