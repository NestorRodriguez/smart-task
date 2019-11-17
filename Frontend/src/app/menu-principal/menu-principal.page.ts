import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  id = null;

  constructor(  private menu: MenuController, private activedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  openCustom() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
