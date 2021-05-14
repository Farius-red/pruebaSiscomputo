import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../modelos/usuarios/Usuarios.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usu = {
    id: null,
    nombre: '',
    apellido: '',
    cedula: '',
    telefono: null,
    edad: '',
  };


  constructor(private httpC: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUsuario() {
    return this.httpC.get<Usuarios[]>('http://127.0.0.1:8000/api/usuarios');
  }

  // tslint:disable-next-line:typedef
  createUsu() {
  }
  // tslint:disable-next-line:typedef
  deleteUsuario(id: any) {
    return this.httpC.delete('http://127.0.0.1:8000/api/usuarios/' + id);
  }

  // tslint:disable-next-line:typedef
  editUsuarios() {
    console.log('editando Usu');
    }
}
