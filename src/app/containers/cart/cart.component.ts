import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/data/products.data';
import { CartServiceService } from 'src/app/services/cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent {
  public isOpen!: boolean;

  constructor(public cartService: CartServiceService) {}

  openMenu(): void {
    this.isOpen = !this.isOpen;
  }

}
