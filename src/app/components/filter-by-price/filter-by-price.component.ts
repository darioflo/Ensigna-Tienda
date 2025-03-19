import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-filter-by-price',
  imports: [NgClass],
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css'],
})
export class FilterByPriceComponent implements OnInit {
  @Input() dropdownCategory!: boolean;
  @Input() dropdownPrice!: boolean;
  @Output() toggleCategory = new EventEmitter<void>();
  @Output() togglePrice = new EventEmitter<void>();

  constructor(public productServices: ProductsService) {}

  ngOnInit(): void {}

  activeDropdownPrice(): void {
    this.togglePrice.emit(); // Emitir evento al padre
  }

  selectedPriceRange(min: number, max: number): void {
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
}
