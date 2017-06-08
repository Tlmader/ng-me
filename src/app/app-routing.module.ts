import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { PhotosComponent } from './photos/photos.component';
import { ProjectsComponent } from './projects/projects.component';
import { TheodoricComponent } from './projects/theodoric/theodoric.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/theodoric', component: TheodoricComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
