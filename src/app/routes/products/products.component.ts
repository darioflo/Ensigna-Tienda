import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import Product from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [HeaderComponent, CardProductComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(public productServices: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe({
      next: (data) => {
        this.products = data.slice(0, 40);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
