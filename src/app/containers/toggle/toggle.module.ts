import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleComponent } from './toggle.component';
import { ButtonModule } from 'src/app/components/button/button.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ToggleComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [
    ToggleComponent
  ]
})
export class ToggleModule { }
