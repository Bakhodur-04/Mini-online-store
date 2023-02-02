import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { RouterModule } from '@angular/router';
import { ProductPageRoutingModule } from './product-page.routing.module';


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductPageRoutingModule,
  ],
  exports: [ProductPageComponent]
})

export class ProductPageModule { }
