import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuarios } from '../modelos/usuarios/Usuarios.modelo';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public usu = {
    id: 0,
    nombre: '',
    apellido: '',
    cedula: 0,
    telefono: 0,
    edad: 0,
  };


  constructor(private httpC: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUsuario() {
    return this.httpC.get<Usuarios[]>('http://127.0.0.1:8000/api/usuarios');
  }

  // tslint:disable-next-line:typedef
  createUsu(usuario: Usuarios) {
   return  this.httpC.post('http://127.0.0.1:8000/api/usuarios', usuario);
  }
  // tslint:disable-next-line:typedef
  deleteUsuario(id: number) {
    return this.httpC.delete(`http://127.0.0.1:8000/api/usuarios/${id}` );
  }

  // tslint:disable-next-line:typedef
  editUsuarios(id: number, changes: Partial<Usuarios>) {
    return this.httpC.put(`http://127.0.0.1:8000/api/usuarios/${id}`, changes);
    }
}
