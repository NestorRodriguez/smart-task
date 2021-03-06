import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ingresar', loadChildren: './ingresar/ingresar.module#IngresarPageModule' },
  { path: 'registrarse', loadChildren: './registrarse/registrarse.module#RegistrarsePageModule' },
  { path: 'menu-principal', loadChildren: './menu-principal/menu-principal.module#MenuPrincipalPageModule' },
  { path: 'trabajadores/:id', loadChildren: './trabajadores/trabajadores.module#TrabajadoresPageModule' },
  { path: 'r-trabajador', loadChildren: './r-trabajador/r-trabajador.module#RTrabajadorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
