import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.page.html',
  styleUrls: ['./ingresar.page.scss'],
})
export class IngresarPage implements OnInit {
  
  constructor() { }

  model: any = {};
  ngOnInit() {
    this.model = {
      correo : null,
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
