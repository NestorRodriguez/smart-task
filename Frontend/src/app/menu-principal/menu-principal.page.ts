import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { KmellappService } from '../services/kmellapp.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  perfil: any;
  id = null;
  usuarios: any[] = [];

  constructor(  private menu: MenuController, 
                private activedRoute: ActivatedRoute,
                private service: KmellappService,
                public storage: Storage ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.storage.get('userlogged').then( data => {
      this.perfil = data;
      this.service.getQuery(`/usuarios/${this.perfil.id}`).subscribe( usuario => {
        this.usuarios = usuario;
        console.log('data del servicio');
      });
    });
  }

  openCustom() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
