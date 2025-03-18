import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroImageComponent } from '../../components/hero-image/hero-image.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroImageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
