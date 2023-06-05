import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFilmComponent } from './form-film/form-film.component';

const routes: Routes = [
  { path: 'formFilm', component: FormFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
