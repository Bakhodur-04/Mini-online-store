import { Injectable } from '@angular/core';
import { Product, products } from '../data/products.data';
import { CatalogSharedModule } from '../containers/catalog/catalog-shared.module';
import { DataServiceService } from './data-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Injectable({
  providedIn: CatalogSharedModule,
})

export class CatalogServiceService {
  filteredProducts!: Product[];
  newFilterBtnActive!: string;
  products!: Product[];
  public product!: Product;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private dataService: DataServiceService
  ) {}

  public getProducts(filterBy: 'actionPrice' | 'available' | 'none' = 'none') {
    this.dataService.setData(products);
    this.products = this.dataService.getData();

    if (filterBy == 'available') {
      this.newFilterBtnActive = filterBy
      this.filteredProducts = this.products.filter((currentProduct) => currentProduct.availability)
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {filter: filterBy}
      })
      return this.filteredProducts
    }
    else if (filterBy == 'actionPrice') {
      this.newFilterBtnActive = filterBy
      this.filteredProducts = this.products.filter((currentProduct) => currentProduct.discount)
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {filter: filterBy}
      })
      return this.filteredProducts;
    }
    else {
      this.newFilterBtnActive = filterBy
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {filter: filterBy}
      })
      return this.filteredProducts = this.products;
    }
  }

  public getProduct(id: number) {
    this.dataService.setData(products);
    this.products = this.dataService.getData();

    let index = this.products.findIndex(thing => id == thing.id);
    this.product = this.products[index]
    return this.product
  }
}
