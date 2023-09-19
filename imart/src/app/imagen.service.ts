import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }
  
  buscarImagenes(terminoBusqueda: string, page: number, perPage: number, filters: any) {
    let url = `https://api.unsplash.com/search/photos?query=${terminoBusqueda}&page=${page}&per_page=${perPage}&client_id=${environment.apiKey}`;
  
    // Agrega los filtros a la URL si se proporcionan
    if (filters) {
      if (filters.order_by) {
        url += `&order_by=${filters.order_by}`;
      }
      if (filters.content_filter) {
        url += `&content_filter=${filters.content_filter}`;
      }
      if (filters.color) {
        url += `&color=${filters.color}`;
      }
      
      // Agrega más campos de filtros según sea necesario
    }
  
    return this.http.get(url);
  }

  getImagenDetails(id: string) {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${environment.apiKey}`;
    return this.http.get(url);
  }

  // Nuevo método para obtener la lista de ciudades
  getCities(): Observable<any> {
    const url = `https://api.unsplash.com/search/photos?query=cities&per_page=10&client_id=${environment.apiKey}`;
    return this.http.get(url);
  }
}
