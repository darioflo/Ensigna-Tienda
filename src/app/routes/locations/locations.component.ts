import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';
import LocationShop from '../../models/Locations';

@Component({
  selector: 'app-locations',
  imports: [HeaderComponent, FooterComponent, NgFor],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent implements OnInit {
  locations: LocationShop[];

  constructor(public productServices: ProductsService) {
    this.locations = [];
  }

  ngOnInit(): void {
    this.productServices.getLocations().subscribe({
      next: (data) => {
        this.locations = data.slice(0, 8);
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
