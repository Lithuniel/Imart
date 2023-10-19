import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="not-found-container">
      <a href="/">
        <button>Atrás</button>
      </a>
      <img
        src="assets/images/error-404.svg"
        alt="Error Image"
        class="error-image"
      />
      <p class="p-notFound">
        La ruta que intentas seguir es más escurridiza que un unicornio en
        zapatillas de ballet. No podemos encontrarla. Por favor, verifica la
        dirección y asegúrate de que estás en el camino correcto.
      </p>
    </div>
    <app-footer [ngClass]="{ 'absolute-footer': esPaginaError }"></app-footer>
  `,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent {
  esPaginaError: boolean = true;
}
