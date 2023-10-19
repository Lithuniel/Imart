import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; 
import { DetailImgComponent } from './views/detail-img/detail-img.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'imagen/:id', component: DetailImgComponent }, 
  { path: '', component: HomeComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
