import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdToolbarModule, MdTabsModule, MdGridListModule,
  MdListModule, MdSelectModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { ContentComponent } from './shared/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MusicComponent,
    PhotosComponent,
    NavbarComponent,
    LayoutComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdTabsModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
