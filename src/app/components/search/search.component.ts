import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import Product from '../../models/Product';

@Component({
  selector: 'app-search',
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  input: FormControl;
  products: Product[];

  constructor(public productServices: ProductsService) {
    this.input = new FormControl('');
    this.form = new FormGroup({
      input: this.input,
    });
    this.products = [];
  }

  ngOnInit(): void {}

  getProductByName() {
    const searchProduct = this.form.get('input')?.value;
    this.productServices.getProductsByName(searchProduct).subscribe({
      next: (data) => {
        console.log(data);
        this.productServices.updateProductByName(data);
      },
    });
    this.form.reset();
  }
}
