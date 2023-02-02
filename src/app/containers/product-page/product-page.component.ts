import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogServiceService } from 'src/app/services/catalog-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})

export class ProductPageComponent {
  public productId!: string;

  constructor(
    private route: ActivatedRoute,
    public catalogService: CatalogServiceService,
  ) {
    this.productId = this.route.snapshot.params['id'];
    this.catalogService.getProduct(Number(this.productId))
  };
}
