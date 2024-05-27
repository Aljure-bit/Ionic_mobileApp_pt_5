import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { InProducto } from 'src/app/interfaces/in-producto';
import { SerProductosService } from '../../servicios/ser-productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage {

  nuevoProducto: InProducto = {
    id: 0,
    nombre: "",
    precio: 0,
    cantidad: 0
  }

  constructor(
    private productoSer: SerProductosService,
    private router: Router,
    private alertController: AlertController
  ) { }

  async crearProducto() {
    try {
      const productos = await this.productoSer.listarProductos().toPromise();

      if (productos) {
        const productoExiste = productos.some(producto => producto.id === this.nuevoProducto.id);

        if (productoExiste) {
          this.mostrarAlerta();
        } else {
          this.productoSer.crearProducto(this.nuevoProducto).subscribe(() => {
            this.router.navigateByUrl("/listar-productos");
          });
        }
      } else {
        console.error('Error: La lista de productos está indefinida');
      }
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
    }
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'ID Existente',
      message: `El ID ${this.nuevoProducto.id} ya está en uso, por favor ingrese otro ID y su producto`,
      buttons: ['OK']
    });

    await alert.present();
  }
}


