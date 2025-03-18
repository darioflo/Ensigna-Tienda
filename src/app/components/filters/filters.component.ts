import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Category from '../../models/Categories';
import Product from '../../models/Product';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-filters',
  imports: [NgClass, NgFor],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent implements OnInit {
  dropdown: boolean;
  dropdownPrice: boolean;
  categories: Category[];

  constructor(public productServices: ProductsService) {
    this.dropdown = false;
    this.dropdownPrice = false;
    this.categories = [];
  }

  ngOnInit(): void {
    this.productServices.getCategories().subscribe({
      next: (data) => {
        this.categories = data.slice(0, 5);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //pasarle los datos que trae el metodo getProductsByCategoria a updateProductsFiltered para que se guarden en el observable
  selectCategory(categoryId: number): void {
    console.log(categoryId);
    this.productServices.getProductsByCategory(categoryId).subscribe({
      next: (data) => {
        this.productServices.updateProductsFilteredByCategory(data);
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectedPriceRange(min: number, max: number) {
    console.log(min, max);
    this.productServices.getProductsByRange(min, max).subscribe({
      next: (data) => {
        console.log(data);
        this.productServices.updatedProductsByRange(data);
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
