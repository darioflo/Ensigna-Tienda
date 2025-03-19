import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ProductsComponent } from './routes/products/products.component';
import { ClientsComponent } from './routes/clients/clients.component';
import { LocationsComponent } from './routes/locations/locations.component';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { ShopServicesComponent } from './routes/shop-services/shop-services.component';
import { ProductsDetailsComponent } from './routes/products-details/products-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'shopServices', component: ShopServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'productDetails/:id', component: ProductsDetailsComponent },
];
