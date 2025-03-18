import { Component, Input } from '@angular/core';
import Product from '../../models/Product';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() product!: Product;
}
