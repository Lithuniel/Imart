import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BusquedaImagenesComponent } from './busqueda-imagenes/busqueda-imagenes.component';
import { HomeComponent } from './home/home.component';
import { DetailImgComponent } from './detail-img/detail-img.component';

@NgModule({
  declarations: [
    AppComponent,
    BusquedaImagenesComponent,
    HomeComponent,
    DetailImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
