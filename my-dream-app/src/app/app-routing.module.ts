import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaterialComponent } from './material/material.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RandomImageComponent } from './random-image/random-image.component';

const routes: Routes = [
	{ path: '', component:  HomeComponent },
	{ path: 'about', component:  AboutComponent },
	{ path: 'login', component:  LoginComponent },
	{ path: 'material', component:  MaterialComponent },
	{ path: 'images', component:  RandomImageComponent },
	{ path: '**', component:  NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
