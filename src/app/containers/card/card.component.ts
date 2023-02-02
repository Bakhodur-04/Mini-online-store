import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/data/products.data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product
  
  @Output() cartProduct = new EventEmitter<Product>();

  public addCart(product: Product) {
    this.cartProduct.emit(product)
  }
}
