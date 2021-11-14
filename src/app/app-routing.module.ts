import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then( m => m.AuthModule )
   //component: RegistroComponent
  },
  {
    path: 'heroes',
    loadChildren: ()=> import('./heroes/heroes.module').then( m => m.HeroesModule )
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
   // component: ErrorPageComponent
    redirectTo: '404'
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
