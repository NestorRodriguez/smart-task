import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.page.html',
  styleUrls: ['./trabajadores.page.scss'],
})
export class TrabajadoresPage implements OnInit {

  id = null;

  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
