import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KmellappService } from '../services/kmellapp.service';
import {NavController, AlertController, ModalController} from '@ionic/angular';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage implements OnInit {

  id: any = null;
  registro: any = [];
  trabajadores: any = [];
  errorMessage = '';
  listaTrabajadores: any[];

  constructor(private activedRoute: ActivatedRoute,
              private service: KmellappService,
              private toastCtrl: ToastController,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.id = parseInt(this.activedRoute.snapshot.paramMap.get('id'));
    this.service.getQuery('usuarios').subscribe( (listaTrabajadores: any) => {
      for ( const trabajador of listaTrabajadores  ) {
        console.log('trabajador' , trabajador);
        if (trabajador.profesion_id === this.id && trabajador.rol_id === 3 ) {
          this.trabajadores.push(trabajador);
      }
    }
    }, error => this.errorMessage = error);
  }
}
