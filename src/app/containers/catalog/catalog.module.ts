import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CardModule } from '../card/card.module';
import { ToggleModule } from '../toggle/toggle.module';
import { CartModule } from '../cart/cart.module';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductPageModule } from '../product-page/product-page.module';
import { CatalogSharedModule } from './catalog-shared.module';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ToggleModule,
    CartModule,
    CatalogRoutingModule,
    ProductPageModule,
    CatalogSharedModule,
  ],
  exports: [
    CatalogComponent
  ]
})
export class CatalogModule { }
