import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from './ui/ui.module';
import {MaterialModule} from './material/material.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RandomImageComponent } from './random-image/random-image.component';

import { UserService } from './user.service';
import { YoutubeComponent } from './youtube/youtube.component';
import { VideoListComponent } from './youtube/video-list/video-list.component';
import { VideoDetailComponent } from './youtube/video-detail/video-detail.component';


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
    VideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
