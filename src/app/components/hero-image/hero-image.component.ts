import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-hero-image',
  imports: [],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css',
})
export class HeroImageComponent implements OnInit {
  nombreUsuario: string | null;

  constructor(public productService: ProductsService) {
    this.nombreUsuario = '';
  }

  ngOnInit(): void {
    this.productService.userName$.subscribe(
      (name) => (this.nombreUsuario = name)
    );
  }
}
