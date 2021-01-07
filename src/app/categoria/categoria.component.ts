import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {
  allCategoriaProductos: any;
  lacategoria: any;
  opcion: any;
  constructor(
    private rutaActiva: ActivatedRoute,
    private ServiciosInyected: ServiciosService
  ) { }

  ngOnInit(): void {
    this.lacategoria = this.rutaActiva.snapshot.params.titulo;
    this.opcion = 1;
    this.rtzCategoriaProductos(this.rutaActiva.snapshot.params.titulo,this.opcion);
    console.log(this.lacategoria);
    console.log(this.rutaActiva.snapshot.params.titulo);
  }

  rtzCategoriaProductos(titulo, opcion) {
    this.ServiciosInyected.leerUnProductoCategoria(titulo).subscribe(
      (categoriaproductos) => {
        this.allCategoriaProductos = categoriaproductos;
        console.log(categoriaproductos);
      },
      error => {
        console.log('error');
      }
    );
  }

}
