import { Component, OnInit, input, output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Category from '../../models/Categories';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-filter-by-category',
  imports: [NgClass, NgFor],
  templateUrl: './filter-by-category.component.html',
  styleUrls: ['./filter-by-category.component.css'],
})
export class FilterByCategoryComponent implements OnInit {
  readonly dropdownCategory = input.required<boolean>();
  readonly dropdownPrice = input.required<boolean>();
  readonly toggleCategory = output<void>();
  readonly togglePrice = output<void>();

  categories: Category[] = [];

  constructor(public productServices: ProductsService) {}

  ngOnInit(): void {
    this.productServices.getCategories().subscribe({
      next: (data) => {
        this.categories = data.slice(1, 5);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  activeDropdown(): void {
    this.toggleCategory.emit();
  }

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
}
