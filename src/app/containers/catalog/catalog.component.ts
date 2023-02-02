import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/data/products.data';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {

  constructor(
    public catalogService: CatalogServiceService,
    public cartService: CartServiceService,
    public dataService: DataServiceService,
  ) {}

  ngOnInit(): void {
    this.dataService.setData(products);
    this.catalogService.getProducts();
  }

}
