import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/Product';
import Category from '../models/Categories';
import User from '../models/Users';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];
  readonly URL_PRODUCTS = 'https://api.escuelajs.co/api/v1/products';
  readonly URL_PRODUCT_BY_SLUG =
    'https://api.escuelajs.co/api/v1/products/slug/';
  readonly URL_CATEGORIES = 'https://api.escuelajs.co/api/v1/categories';
  readonly URL_CATEGORIES_BY_SLUG =
    'https://api.escuelajs.co/api/v1/categories/slug';
  readonly URL_CLIENTS = 'https://api.escuelajs.co/api/v1/users';
  readonly URL_LOCATIONS = 'https://api.escuelajs.co/api/v1/locations';

  constructor(private http: HttpClient) {
    this.products = [
      {
        id: 0,
        title: '',
        slug: '',
        price: 0,
        description: '',
        category: {
          id: 0,
          name: '',
          image: '',
          slug: '',
        },
        images: ['', '', ''],
      },
    ];
  }

  getProducts() {
    return this.http.get<Product[]>(this.URL_PRODUCTS);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.URL_PRODUCTS}/${id}`);
  }

  getProductBySlug(slug: string) {
    return this.http.get<Product>(`${this.URL_PRODUCT_BY_SLUG}/${slug}`);
  }

  getCategories() {
    this.http.get<Category>(this.URL_CATEGORIES);
  }

  getCategoriesById(id: number) {
    this.http.get<Category>(`${this.URL_CATEGORIES}/${id}`);
  }

  getCategoriesBySlug(slug: string) {
    this.http.get<Category>(`${this.URL_CATEGORIES_BY_SLUG}/${slug}`);
  }

  getClients() {
    return this.http.get<User[]>(this.URL_CLIENTS);
  }

  getLocations() {
    return this.http.get<Location[]>(this.URL_LOCATIONS);
  }
}
