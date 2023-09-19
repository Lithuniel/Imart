import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ImagenService } from '../imagen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  terminoBusqueda: string = '';
  resultados: any[] = [];
  isLoading = false;
  currentPage = 1;
  itemsPerPage = 10;
  totalPages = 1;
  visiblePages: number[] = [];
  maxVisiblePages = 6;
  filters: any = {};

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private imagenService: ImagenService, private router: Router) {}

  ngOnInit() {
    // Carga 10 imágenes aleatorias al inicio
    this.loadRandomImages(10);
  }

  buscarImagenes() {
    this.currentPage = 1;
    this.loadImages();
  }

  verDetalle(id: string) {
    this.router.navigate(['imagen', id]);
  }

  nextPage() {
    if (!this.isLoading && this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadImages();
    }
  }

  prevPage() {
    if (!this.isLoading && this.currentPage > 1) {
      this.currentPage--;
      this.loadImages();
    }
  }

  goToPage(pageNumber: number) {
    if (!this.isLoading && pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.loadImages();
    }
  }

  generateVisiblePages() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxVisiblePages = this.maxVisiblePages;

    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    this.visiblePages = [];
    for (let page = startPage; page <= endPage; page++) {
      this.visiblePages.push(page);
    }
  }

  loadImages() {
    this.isLoading = true;

    this.imagenService
      .buscarImagenes(this.terminoBusqueda, this.currentPage, this.itemsPerPage, this.filters)
      .subscribe(
        (data: any) => {
          this.resultados = data.results;
          this.totalPages = Math.ceil(data.total / this.itemsPerPage);
          this.generateVisiblePages();
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error al cargar imágenes:', error);
          this.isLoading = false;
        }
      );
  }

  loadRandomImages(count: number) {
    this.isLoading = true;

    this.imagenService
      .getRandomImages(count)
      .subscribe(
        (data: any) => {
          this.resultados = data;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error al cargar imágenes aleatorias:', error);
          this.isLoading = false;
        }
      );
  }
}



