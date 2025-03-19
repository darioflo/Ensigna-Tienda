import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import Product from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-details',
  imports: [HeaderComponent, NgIf],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css',
})
export class ProductsDetailsComponent implements OnInit {
  product: Product;
  id: number;

  constructor(
    public productServices: ProductsService,
    private route: ActivatedRoute
  ) {
    this.product = {
      id: 0,
      title: '',
      slug: '',
      price: 0,
      description: '',
      category: {
        id: 0,
        name: '',
        image: '',
        slug: '',
      },
      images: ['', '', ''],
    };

    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit(): void {
    this.productServices.getProductById(this.id).subscribe({
      next: (data) => {
        this.productServices.updateProductById(data);
        this.product = data;
        console.log(this.product);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
