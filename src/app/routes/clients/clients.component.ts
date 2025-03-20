import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NgFor } from '@angular/common';
import Team from '../../models/Team';
import { ProductsService } from '../../services/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [HeaderComponent, FooterComponent, NgFor, RouterLink],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
})
export class ClientsComponent implements OnInit {
  clients: Team[];

  constructor(public productServices: ProductsService) {
    this.clients = [];
  }

  ngOnInit(): void {
    this.productServices.getClients().subscribe({
      next: (data) => {
        this.clients = data.results;
        console.log(this.clients);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
