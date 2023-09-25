import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagenService } from '../../services/imagen.service';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {
  imagenId: string | null = null;
  imagenDetalles: any = {}; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private imagenService: ImagenService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.imagenId = id;
        this.obtenerDetallesDeImagenConCamposAdicionales();
      }
    });
  }

  obtenerDetallesDeImagenConCamposAdicionales() {
    if (this.imagenId !== null) {
      this.imagenService.getImagenDetailsWithAdditionalFields(this.imagenId).subscribe((data: any) => {
        this.imagenDetalles = data;
      });
    }
  }

  volverAtras() {
    window.history.back();
  }
}




