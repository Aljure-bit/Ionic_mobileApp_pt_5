import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-productos',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'listar-productos',
    loadChildren: () => import('./productos/listar-productos/listar-productos.module').then( m => m.ListarProductosPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./productos/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'eliminar-producto/:id',
    loadChildren: () => import('./productos/eliminar-producto/eliminar-producto.module').then( m => m.EliminarProductoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
