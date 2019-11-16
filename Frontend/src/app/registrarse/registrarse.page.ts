import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor() { }

  model: any = {};
  ngOnInit() {
    this.model = {
      name : null,
      apellido : null,
      correo : null,
      celular : null,
      password : null,
    };
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
       console.log(formulario);
    }
}
public evento(evento:Event) {
  console.log(evento);
}
}