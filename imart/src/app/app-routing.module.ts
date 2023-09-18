import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; 
import { DetailImgComponent } from './detail-img/detail-img.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'imagen/:id', component: DetailImgComponent }, 
];


@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
