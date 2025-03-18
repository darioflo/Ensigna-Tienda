import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroImageComponent } from '../../components/hero-image/hero-image.component';
import { InformationComponent } from '../../components/information/information.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, HeroImageComponent, InformationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
