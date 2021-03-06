import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaterialComponent } from './material/material.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'material', component: MaterialComponent },
	{ path: 'images', component: RandomImageComponent },
	{ path: 'videos', component: YoutubeComponent },
	{ path: 'material-form', component: FormsComponent },
	{ path: 'template-form', component: TemplateformComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'users/add', component: ReactiveformComponent },
	{ path: 'users/edit', component: ReactiveformComponent },
	{ path: 'reactive-form', component: ReactiveformComponent },
	{ path: 'form-builder', component: FormbuilderComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
