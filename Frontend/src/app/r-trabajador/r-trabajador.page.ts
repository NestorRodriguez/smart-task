import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { KmellappService } from '../services/kmellapp.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-r-trabajador',
  templateUrl: './r-trabajador.page.html',
  styleUrls: ['./r-trabajador.page.scss'],
})

export class RTrabajadorPage implements OnInit {
  usuario: any;
  model: any = {};
  profesiones: any[] = [];

  constructor(private camera: Camera,
              private service: KmellappService,
              public storage: Storage) { }

  ngOnInit() {
    this.model = {
      rol_id: 3,
      documento: null,
      profesion_id: null,
      // foto: null
      foto : 'assets/Kmellapp.jpg'
    }
    this.storage.get('userlogged').then( data => {
      this.usuario = data;
      console.log('usuario recuperado', this.usuario);
    });
    this.service.getQuery('profesion').subscribe( data => {
      this.profesiones = data;
    });

  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
      this.service.putData(`/usuarios/${this.usuario.id}`, this.model).subscribe( data => {
        console.log(data);
      })
    }
}
public evento(evento:Event) {
  console.log(evento);
}

async loadCamera() {
    const options = {
    quality: 25,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
    cameraDirection: this.camera.Direction.BACK,
  };
  this.model.foto = 'data:image/jpeg;base64,' + await this.camera.getPicture(options);
}
}