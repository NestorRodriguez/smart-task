import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KmellappService } from '../services/kmellapp.service';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  constructor(  private toastCtrl: ToastController,
                private service: KmellappService ) { }

  model: any = {};
  ngOnInit() {
    this.model = {
      nombres : null,
      apellidos : null,
      email : null,
      celular : null,
      contrasena : null,
      rol_id: '2',
      documento: null,
      profesion_id: '1',
      foto: null,
      createdAt: null,
      updatedAt: null
    };
  }
  public async enviarData( formulario: NgForm ) {
    if (formulario.valid) {
      this.model.celular = this.model.celular.toString();
      this.model.contrasena = this.model.contrasena.toString();
      this.service.postData('usuarios', this.model).subscribe( async (res) => {
        const toast = await this.toastCtrl.create({
          message: 'Registro exitoso',
          duration: 1800
       });
       await toast.present();
       })
    }
}
public evento(evento:Event) {
  // console.log(evento);
}
}