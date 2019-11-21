import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RTrabajadorPage } from './r-trabajador.page';

const routes: Routes = [
  {
    path: '',
    component: RTrabajadorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RTrabajadorPage]
})
export class RTrabajadorPageModule {}
