import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetailImgComponent } from './views/detail-img/detail-img.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterComponent } from './component/filter/filter.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailImgComponent,
    FilterComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

