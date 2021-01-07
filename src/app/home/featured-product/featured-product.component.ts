import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {
  allProductos: any;
  constructor(
    private ServiciosInyected: ServiciosService
  ) { }

  ngOnInit(): void {
    this.rtzProductos();
  }

  rtzProductos() {
    this.ServiciosInyected.leerProducto().subscribe(
      (productos) => {
        this.allProductos = productos['result'];
        console.log('este es ', this.allProductos);
      },
      error => {
        console.log('error');
      }
    );
  }

}
