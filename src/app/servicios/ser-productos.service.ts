import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InProductos } from '../interfaces/in-productos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InProducto } from '../interfaces/in-producto';

@Injectable({
  providedIn: 'root'
})
export class SerProductosService {

  constructor(private http:HttpClient) { }

  listarProductos(): Observable<InProductos>{
    return this.http.get<InProductos>(`${environment.apiURL}/productos`);
  }

  crearProducto(nuevoProducto: InProducto): Observable<InProducto>{
    return this.http.post<InProducto>(`${environment.apiURL}/productos`, nuevoProducto);
  }

  getProductoByID(id: Number):Observable<InProducto>{
    return this.http.get<InProducto>(`${environment.apiURL}/productos/${id}`);
  }

  eliminarProducto(id: Number):Observable<InProductos>{
    return this.http.delete<InProductos>(`${environment.apiURL}/productos/${id}`);
  }

}
