import { Injectable } from '@angular/core';
import { Product, products } from '../data/products.data';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {
  private data!: any;
  
  constructor() { }
  
  public setData<T>(data: T): void {
    this.data = data
  }

  public getData<T>(): T {
    return this.data
  }
}
