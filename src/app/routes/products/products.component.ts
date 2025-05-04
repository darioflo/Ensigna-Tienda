import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import Product from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { CommonModule, NgFor } from '@angular/common';
import { FiltersComponent } from '../../components/filters/filters.component';
import { FooterComponent } from '../../components/footer/footer.component';
@Component({
  selector: 'app-products',
  imports: [
    HeaderComponent,
    CardProductComponent,
    NgFor,
    CommonModule,
    FiltersComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[];
  filteredProducts: Product[];
  categoryName: string;
  productsRange: string;
  productSearched: Product[];

  constructor(public productServices: ProductsService) {
    this.products = [];
    this.filteredProducts = [];
    this.categoryName = '';
    this.productsRange = '';
    this.productSearched = [];
  }

  ngOnInit(): void {
    this.productServices.getProducts().subscribe({
      next: (data) => {
        this.products = data.slice(0, 48);
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.productServices.filteredProducts$.subscribe((filteredData) => {
      if (this.productServices.showCategory) {
        console.log(filteredData);
        this.filteredProducts = filteredData;
        this.categoryName = filteredData[0].category.name;
      }
    });

    this.productServices.filteredProducts$.subscribe((filteredData) => {
      if (this.productServices.showProductsForPrice) {
        this.filteredProducts = filteredData;
      }
    });

    this.productServices.productByName$.subscribe({
      next: (data) => {
        this.productSearched = data;
        console.log(this.productSearched);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
