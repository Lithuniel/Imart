import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }

  buscarImagenes(terminoBusqueda: string, page: number, perPage: number, filters: any) {
    let url = `https://api.unsplash.com/search/photos?query=${terminoBusqueda}&page=${page}&per_page=${perPage}&client_id=${environment.apiKey}`;
  
    
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
      
   
    }
  
    return this.http.get(url);
  }

  getImagenDetails(id: string) {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${environment.apiKey}`;
    return this.http.get(url);
  }
 
  getImagenDetailsWithAdditionalFields(id: string): Observable<any> {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${environment.apiKey}&w=id,description,show_on_profile,tags,location[latitude],location[longitude],location[name],location[city],location[country],exif[make],exif[model],exif[exposure_time],exif[aperture_value],exif[focal_length],exif[iso_speed_ratings]`;
    return this.http.get(url);
  }
 
  getRandomImages(count: number): Observable<any> {
    const url = `https://api.unsplash.com/photos/random?count=${count}&client_id=${environment.apiKey}`;
    return this.http.get(url);
  }

  getCities(): Observable<any> {
    const url = `https://api.unsplash.com/search/photos?query=cities&per_page=10&client_id=${environment.apiKey}`;
    return this.http.get(url);
  }
}
