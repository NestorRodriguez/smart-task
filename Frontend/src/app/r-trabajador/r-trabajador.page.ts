import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {Camera, CameraOptions} from '@ionic-native/camera/ngx';


@Component({
  selector: 'app-r-trabajador',
  templateUrl: './r-trabajador.page.html',
  styleUrls: ['./r-trabajador.page.scss'],
})

export class RTrabajadorPage implements OnInit {

  model: any = {};

  constructor() { }
  // constructor(private camera: Camera) { }

  ngOnInit() {
    this.model ={
      document: null,
      foto : null,
      // foto : 'assets/kmellapp.jpg',
      profesion : null,
    }
  }
  public enviarData( formulario: NgForm ) {
    if (formulario.valid) {
       console.log(formulario);
    }
}
public evento(evento:Event) {
  console.log(evento);
}

// async loadCamera() {
//   const options = {
//     quality: 25,
//     destinationType: this.camera.DestinationType.DATA_URL,
//     encodingType: this.camera.EncodingType.JPEG,
//     mediaType: this.camera.MediaType.PICTURE,
//     correctOrientation: true,
//     cameraDirection: this.camera.Direction.BACK,
//   };
//   this.model.imagen = 'data:image/jpeg;base64,' + await this.camera.getPicture(options);
// }
}