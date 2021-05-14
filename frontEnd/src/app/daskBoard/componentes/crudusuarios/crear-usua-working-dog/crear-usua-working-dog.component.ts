import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuarios } from 'src/app/core/modelos/usuarios/Usuarios.modelo';

import { UsuariosService } from 'src/app/core/services/usuarios.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'crear-usua-workingDog',
  templateUrl: './crear-usua-working-dog.component.html',
  styleUrls: ['./crear-usua-working-dog.component.css'],
})
export class CrearUsuaWorkingDogComponent implements OnInit {
   usuario: any;


  public newUsu = this.fb.group( {
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    cedula: [null],
    telefono: [null, Validators.required],
    edad: [null, Validators.required],

  });

  constructor(
    public usuarios: UsuariosService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private rout: Router,
  ) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
    });
  }

  // tslint:disable-next-line:typedef
  guardar() {
    const  upUsu: Partial<Usuarios> = this.usuarios.usu;
    this.usuarios.editUsuarios(this.usuarios.usu.id, upUsu).subscribe();
    this.rout.navigate(['/listaUsuarios']);
  }

  // tslint:disable-next-line:typedef
  create(){
    this.usuarios.createUsu(this.newUsu.value)
      .subscribe(
        u => console.log(u));
    this.rout.navigate(['/listaUsuarios']);
      }
}
