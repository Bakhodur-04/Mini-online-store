import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from '../product-page/product-page.component';
import { CatalogComponent } from './catalog.component';

export const routes: Routes = [
  {
    path: 'catalog',
    
    children: [
      {
        path: '',
        component: CatalogComponent,
        data: {title: 'Каталог товаров'},
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductPageComponent,
      }
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CatalogRoutingModule { }
