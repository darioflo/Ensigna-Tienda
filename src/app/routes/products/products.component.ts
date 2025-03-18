import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';

@Component({
  selector: 'app-products',
  imports: [HeaderComponent, CardProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {}
