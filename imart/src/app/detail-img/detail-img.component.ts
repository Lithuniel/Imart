import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from '../imagen.service';

@Component({
  selector: 'app-detail-img',
  templateUrl: './detail-img.component.html',
  styleUrls: ['./detail-img.component.css']
})
export class DetailImgComponent implements OnInit {
  imagenId: string | null = null;
  imagenDetalles: any;

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.imagenId = id;
  
        this.obtenerDetallesDeImagen();
      }
    });
  }

  obtenerDetallesDeImagen() {
  
    if (this.imagenId !== null) {
      this.imagenService.getImagenDetails(this.imagenId)
        .subscribe((data: any) => {
          
          this.imagenDetalles = data;
        });
    }
  }
}



