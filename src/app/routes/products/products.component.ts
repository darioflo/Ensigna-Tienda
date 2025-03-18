import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CardProductComponent } from '../../components/card-product/card-product.component';
import Product from '../../models/Product';
import { ProductsService } from '../../services/products.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import Category from '../../models/Categories';
@Component({
  selector: 'app-products',
  imports: [HeaderComponent, CardProductComponent, NgFor, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  products: Product[];
  dropdown: boolean;
  dropdownPrice: boolean;
  categories: Category[];

  productsByCategory: Product[];

  constructor(public productServices: ProductsService) {
    this.products = [];
    this.dropdown = false;
    this.dropdownPrice = false;
    this.categories = [];
    this.productsByCategory = [];
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

    this.productServices.getCategories().subscribe({
      next: (data) => {
        this.categories = data.slice(0, 5);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectCategory(categoryId: number): void {
    console.log(categoryId);

    this.productServices.getProductsByCategory(categoryId).subscribe({
      next: (data) => {
        this.productsByCategory = data;
        console.log(this.productsByCategory);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  activeDropdown() {
    console.log(this.dropdown);
    this.dropdown = !this.dropdown;
  }

  activeDropdownPrice() {
    console.log(this.dropdownPrice);
    this.dropdownPrice = !this.dropdownPrice;
  }
}
