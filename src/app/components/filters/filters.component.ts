import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Category from '../../models/Categories';
import Product from '../../models/Product';
import { NgClass, NgFor } from '@angular/common';
import { FilterByCategoryComponent } from '../filter-by-category/filter-by-category.component';
import { FilterByPriceComponent } from '../filter-by-price/filter-by-price.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-filters',
  imports: [FilterByCategoryComponent, FilterByPriceComponent, SearchComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  dropdownCategory: boolean;
  dropdownPrice: boolean;
  categories: Category[];

  constructor(public productServices: ProductsService) {
    this.dropdownCategory = false;
    this.dropdownPrice = false;
    this.categories = [];
  }

  toggleCategoryMenu(): void {
    this.dropdownCategory = !this.dropdownCategory;
    this.dropdownPrice = false;
  }

  togglePriceMenu(): void {
    this.dropdownPrice = !this.dropdownPrice;
    this.dropdownCategory = false;
  }
}
