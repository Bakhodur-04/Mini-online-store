import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './product-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
