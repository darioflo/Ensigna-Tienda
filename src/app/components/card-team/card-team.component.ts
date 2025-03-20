import { Component, OnInit } from '@angular/core';
import Team from '../../models/Team';
import { ProductsService } from '../../services/products.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-card-team',
  imports: [NgFor],
  templateUrl: './card-team.component.html',
  styleUrl: './card-team.component.css',
})
export class CardTeamComponent implements OnInit {
  persons: Team[];

  constructor(public productServices: ProductsService) {
    this.persons = [];
  }

  ngOnInit(): void {
    this.productServices.getTeamPersons().subscribe({
      next: (data) => {
        this.persons = data.results.slice(0, 8);
        console.log(this.persons);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
