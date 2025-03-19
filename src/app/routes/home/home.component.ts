import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroImageComponent } from '../../components/hero-image/hero-image.component';
import { InformationComponent } from '../../components/information/information.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CardTeamComponent } from '../../components/card-team/card-team.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    HeroImageComponent,
    InformationComponent,
    FooterComponent,
    CardTeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
