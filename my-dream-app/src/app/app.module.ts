import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from './ui/ui.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RandomImageComponent } from './random-image/random-image.component';
import { MaterialComponent } from './material/material.component';

import { UserService } from './user.service';
import { YoutubeComponent } from './youtube/youtube.component';
import { VideoListComponent } from './youtube/video-list/video-list.component';
import { VideoDetailComponent } from './youtube/video-detail/video-detail.component';
import { FancyComponent } from './fancy/fancy.component';
import { FancyboxDirective } from './fancybox.directive';
import { FormsComponent } from './forms/forms.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    LoginComponent,
    MaterialComponent,
    RandomImageComponent,
    YoutubeComponent,
    VideoListComponent,
    VideoDetailComponent,
    FancyComponent,
    FancyboxDirective,
    FormsComponent,
    TemplateformComponent,
    ReactiveformComponent,
    FormbuilderComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
