import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component'; 
import { DetailImgComponent } from './views/detail-img/detail-img.component'; 

const routes: Routes = [
  { path: 'imagen/:id', component: DetailImgComponent }, 
  { path: '', component: HomeComponent }, 
];


@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
