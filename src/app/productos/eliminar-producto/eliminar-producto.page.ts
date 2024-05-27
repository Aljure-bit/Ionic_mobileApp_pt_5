import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InProducto } from 'src/app/interfaces/in-producto';
import { SerProductosService } from 'src/app/servicios/ser-productos.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.page.html',
  styleUrls: ['./eliminar-producto.page.scss'],
})
export class EliminarProductoPage {

  producto: InProducto = {
    id: 0,
    nombre: "",
    precio: 0,
    cantidad: 0 
  }

  constructor(private router: Router,
              private productoServ: SerProductosService
  ) { }

  ionViewWillEnter() {
    this.getProductoByID(this.getIdFromUrl())
  }

  getIdFromUrl() {
    let url = this.router.url;
    let arr = url.split("/");
    let id = parseInt(arr[arr.length - 1]);
    return id;
  }

  getProductoByID(productoID: Number) {
    this.productoServ.getProductoByID(productoID).subscribe(
      (resp: InProducto) => {
        this.producto = resp;
      }
    );
  }
  
  eliminarProducto() {
    this.productoServ.eliminarProducto(this.producto.id).subscribe(() => {
      this.router.navigateByUrl("/listar-productos");
    });
  }

}
