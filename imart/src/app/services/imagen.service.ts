import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
  constructor(private http: HttpClient, private router: Router) { }

  buscarImagenes(terminoBusqueda: string, page: number, perPage: number, filters: any): Observable<any> {
    let params = new HttpParams()
      .set('query', terminoBusqueda)
      .set('page', page.toString())
      .set('per_page', perPage.toString())
      .set('client_id', environment.apiKey);

    if (filters) {
      if (filters.order_by) {
        params = params.set('order_by', filters.order_by);
      }
      if (filters.content_filter) {
        params = params.set('content_filter', filters.content_filter);
      }
      if (filters.color) {
        params = params.set('color', filters.color);
      }
    }

    const url = 'https://api.unsplash.com/search/photos';
    this.updateUrlWithSearchTerm(terminoBusqueda);

    return this.http.get(url, { params: params }).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error); 
      })
    );
  }

  private updateUrlWithSearchTerm(searchTerm: string): void {
    this.router.navigate([], {
      queryParams: { q: searchTerm },
      queryParamsHandling: 'merge'
    });
  }

  getImagenDetails(id: string): Observable<any> {
    const url = `https://api.unsplash.com/photos/${id}?client_id=${environment.apiKey}`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
  }

  getImagenDetailsWithAdditionalFields(id: string): Observable<any> {
    const url = `https://api.unsplash.com/photos/${id}`;
    const params = new HttpParams().set('client_id', environment.apiKey)
      .set('w', 'id,description,show_on_profile,tags,location[latitude],location[longitude],location[name],location[city],location[country],exif[make],exif[model],exif[exposure_time],exif[aperture_value],exif[focal_length],exif[iso_speed_ratings]');

    return this.http.get(url, { params: params }).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
  }

  getRandomImages(count: number): Observable<any> {
    const url = `https://api.unsplash.com/photos/random?count=${count}&client_id=${environment.apiKey}`;
    return this.http.get(url).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(error);
      })
    );
  }
}
