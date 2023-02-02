import { Injectable } from '@angular/core';
import { Product } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})

export class CartServiceService {
  private inCart: Array<{count: number, product: Product}> = [];
  private countThings!: number;
  public lenInCart!: number;
  public isOpen: boolean = false;

  constructor() { }

  public addProduct(product: Product) {
    let index = this.inCart.findIndex(thing => thing.product.id == product.id);
    index != -1 ? this.inCart[index].count +=1 : this.inCart.push({count: 1, product});

    this.countThings = 0
    this.inCart.forEach((thing) => this.countThings += thing.count)

    this.lenInCart = this.inCart.length
  }

  public removeProduct(id: number): void {
    let indexItem = this.inCart.findIndex(thing => thing.product.id == id);;
    if (indexItem !== -1) this.inCart.splice(indexItem, 1);

    this.lenInCart = this.inCart.length;
    if (this.lenInCart == 0) this.isOpen = !this.isOpen;
  }

  public getCart() {
    return this.inCart
  }

  public getCount(): number {
    this.countThings = 0;
    this.inCart.forEach((thing) => this.countThings += thing.count);
    return this.countThings
  }

  public deleteAllItems(val: number): void {
    this.inCart.length = val;
    this.countThings = val;
    this.lenInCart = val;
    this.isOpen = !this.isOpen;
  }

  public orderAllItems(): void {
    if (this.lenInCart > 0) alert('Заказ успешно оформлен!')
    this.inCart.length = 0;
    this.countThings = 0;
    this.lenInCart = 0;
    this.isOpen = !this.isOpen;
  }
  
}
