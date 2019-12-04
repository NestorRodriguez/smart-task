import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KmellappService } from '../services/kmellapp.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor( private service: KmellappService ) { }

  model: any = {};
  ngOnInit() {
    this.model = {
      nombres : null,
      apellidos : null,
      email : null,
      celular : null,
      contrasena : null,
      rol_id: 2,
      documento: null,
      profesion_id: 1,
      foto: null,
      createdAt: null,
      updatedAt: null
    };
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
       this.service.postData('usuarios', this.model).subscribe( res => {
         console.log('Respuesta', res);
       });
    }
}
public evento(evento:Event) {
  console.log(evento);
}
}