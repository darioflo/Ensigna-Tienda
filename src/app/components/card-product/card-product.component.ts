import { Component, input } from '@angular/core';
import Product from '../../models/Product';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-card-product',
  imports: [RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  readonly product = input.required<Product>();

  constructor(public productService: ProductsService) {}
}
