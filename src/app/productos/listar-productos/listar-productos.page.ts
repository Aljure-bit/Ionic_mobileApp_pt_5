import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { InProductos } from 'src/app/interfaces/in-productos';
import { SerProductosService } from 'src/app/servicios/ser-productos.service';
import { ListarProductosPageModule } from './listar-productos.module';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.page.html',
  styleUrls: ['./listar-productos.page.scss'],
})
export class ListarProductosPage{

  productos:InProductos = [];

  constructor(private productosSer: SerProductosService,
    private loadingCtrl: LoadingController) { }
    
    ionViewWillEnter() {
      this.loadProductos();
    }  

    async loadProductos(event?: InfiniteScrollCustomEvent){
      const loading = await this.loadingCtrl.create({
        message: "Cargando...",
        spinner: "bubbles"
      });
      await loading.present();
      
      this.productosSer.listarProductos().subscribe(
        (resp) => {
          loading.dismiss();
          let listString = JSON.stringify(resp);
          this.productos = JSON.parse(listString);
          event?.target.complete();
        },
        (err) => {
          console.log(err.message);
          loading.dismiss();
        }
      );
    
    }
}
