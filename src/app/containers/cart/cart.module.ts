import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { BadgeModule } from 'src/app/components/badge/badge.module';
import { DropdownModule } from 'src/app/components/dropdown/dropdown.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    BadgeModule,
    DropdownModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
