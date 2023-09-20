import { Component, ElementRef, ViewChild, OnInit, HostListener } from '@angular/core';
import { ImagenService } from '../../services/imagen.service';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

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
  noResults = false; 
  resultCount: number = 0; 
  elapsedTime: number = 0; 

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private imagenService: ImagenService, private router: Router, private searchService: SearchService) {}

  ngOnInit() {
    this.terminoBusqueda = this.searchService.getSearchTerm();
    
    if (!this.terminoBusqueda || !this.searchService.getSearchTerm()) {
      this.loadRandomImages(10);
    } else {
      this.loadImages(); 
    }
  }
  
  buscarImagenes() {
    this.currentPage = 1;
    this.searchService.setSearchTerm(this.terminoBusqueda); 
    if (this.terminoBusqueda.trim() === '') {
      this.loadRandomImages(10);
    } else {
      this.loadImages(); 
    }
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
    const startTime = Date.now();

    this.imagenService
      .buscarImagenes(this.terminoBusqueda, this.currentPage, this.itemsPerPage, this.filters)
      .subscribe(
        (data: any) => {
          this.resultados = data.results;
          this.totalPages = Math.ceil(data.total / this.itemsPerPage);
          this.generateVisiblePages();

          this.resultCount = data.total;

          this.noResults = this.resultados.length === 0;

          const endTime = Date.now();
          this.elapsedTime = (endTime - startTime) / 1000; 

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

