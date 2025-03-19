import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-shop-services',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './shop-services.component.html',
  styleUrl: './shop-services.component.css',
})
export class ShopServicesComponent {}
