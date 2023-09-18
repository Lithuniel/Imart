import { Component } from '@angular/core';
import { ImagenService } from '../imagen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  terminoBusqueda: string = '';
  resultados: any[] = [];

  constructor(private imagenService: ImagenService) {}

  buscarImagenes() {
    if (this.terminoBusqueda.trim() !== '') {
      this.imagenService.buscarImagenes(this.terminoBusqueda)
        .subscribe(
          (data: any) => {
            this.resultados = data.results;
          },
          (error: any) => {
            console.error('Error al buscar imágenes:', error);
          }
        );
    }
  }
}

