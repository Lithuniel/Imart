import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }
  
  buscarImagenes(terminoBusqueda: string, page: number, perPage: number) {
    const url = `https://api.unsplash.com/search/photos?query=${terminoBusqueda}&page=${page}&per_page=${perPage}&client_id=${environment.apiKey}`;
    return this.http.get(url);
  }

  getImagenDetails(id: string) {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${environment.apiKey}`;
    return this.http.get(url);
  }
}
