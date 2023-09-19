import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private unsplashApiUrl = 'https://api.unsplash.com';
  private apiKey = 'D9qH5iXlhcHxoo3WWr9rhp2FdPHgqUwrJfAph5OzTb0';

  constructor(private http: HttpClient) { }

  getCities() {
    // Construye la URL para obtener ciudades.
    const url = `${this.unsplashApiUrl}/search/photos?query=cities&page=1&per_page=20&client_id=${this.apiKey}`;
    
    // Realiza la solicitud HTTP para obtener ciudades.
    return this.http.get(url);
  }

  // Agrega otros métodos o propiedades según sea necesario
}


