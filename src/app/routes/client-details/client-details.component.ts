import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import Team from '../../models/Team';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css'],
  imports: [HeaderComponent, NgFor],
})
export class ClientDetailsComponent implements OnInit {
  id: any;
  client: Team[] | null;

  constructor(
    public productServices: ProductsService,
    private route: ActivatedRoute
  ) {
    this.client = null;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productServices.getSingleClient().subscribe({
      next: (data) => {
        this.client = data.results;
        console.log(this.client);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
