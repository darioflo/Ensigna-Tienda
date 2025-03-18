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
  readonly URL_PRODUCTS_BY_NAME =
    'https://api.escuelajs.co/api/v1/products/?title=';
  readonly URL_PRODUCT_BY_RANGE =
    'https://api.escuelajs.co/api/v1/products/?price_min=900&price_max=1000';

  readonly URL_PRODUCTS_BY_CATEGORY =
    'https://api.escuelajs.co/api/v1/products/?categoryId=';

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

  getProductsByName() {
    return this.http.get<Product[]>(this.URL_PRODUCTS_BY_NAME);
  }

  getProductsByCategory(id: number) {
    console.log(id);
    return this.http.get<Product[]>(`${this.URL_PRODUCTS_BY_CATEGORY}${id}`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.URL_PRODUCTS}/${id}`);
  }

  getProductsByRange(min: number, max: number) {
    return this.http.get<Product[]>(
      `https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`
    );
  }

  getProductBySlug(slug: string) {
    return this.http.get<Product>(`${this.URL_PRODUCT_BY_SLUG}/${slug}`);
  }

  getCategories() {
    return this.http.get<Category[]>(this.URL_CATEGORIES);
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
