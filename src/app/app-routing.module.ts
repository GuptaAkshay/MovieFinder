/**
 * New typescript file
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { PageNotFoundComponent } from './not-found.component';

const routes: Routes = [
  {
    path: 'detail',
    component: MovieDetailComponent
  },
  {
    path: 'home',
    component: MovieDisplayComponent
  },
  {
    path: 'detail/:id',
    component: MovieDetailComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
  	path:'**',
  	component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}