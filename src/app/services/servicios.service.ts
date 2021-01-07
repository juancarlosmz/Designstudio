import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  ruta: string = 'https://designstudio1.online/backend/public/';

  constructor(private http: HttpClient) { }
  leerCategoria(): Observable<any> {
    return this.http.get<any>(this.ruta + 'categoria');
  }
  leerProducto(): Observable<any> {
    return this.http.get<any>(this.ruta + 'producto');
  }
  leerUnProducto(titulo: string,opcion: string): Observable<any>{
    return this.http.get<any>(this.ruta + 'unproducto/' + titulo + '/' + opcion);
  }
  leerUnProductoCategoria(titulo: string): Observable<any>{
    return this.http.get<any>(this.ruta + 'productocategoria/' + titulo);
  }

}
