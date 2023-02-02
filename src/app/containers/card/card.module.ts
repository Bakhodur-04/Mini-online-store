import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    CardComponent
  ]
})
export class CardModule { }
