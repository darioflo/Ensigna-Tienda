import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Product from '../models/Product';
import Category from '../models/Categories';
import User from '../models/Users';
import { BehaviorSubject } from 'rxjs';
import Team from '../models/Team';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[];
  team: Team[];

  //IMPORTANTE OBSERVADOR BEHAVIOR SUBJECT
  showCategory: boolean;
  showProductsForPrice: boolean;
  showProductSearched: boolean;
  //En esta variable se van a guardar los valores a los que luego podra acceder otro componente
  private filteredProductsSubject = new BehaviorSubject<Product[]>([]);
  //aqui se declara esa variable como un observador
  filteredProducts$ = this.filteredProductsSubject.asObservable();

  private productByNameSubject = new BehaviorSubject<Product[]>([]);
  productByName$ = this.productByNameSubject.asObservable();

  private productByIdSubject = new BehaviorSubject<Product>({
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
  });
  productById$ = this.productByIdSubject.asObservable();

  readonly URL_PRODUCTS = ' https://api.escuelajs.co/api/v1/products';
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

  readonly URL_TEAM = 'https://randomuser.me/api/?results=10';

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

    this.showCategory = false;
    this.showProductsForPrice = false;
    this.showProductSearched = false;
    this.team = [];
  }

  getProducts() {
    return this.http.get<Product[]>(this.URL_PRODUCTS);
  }

  getProductsByName(name: string) {
    return this.http.get<Product[]>(`${this.URL_PRODUCTS_BY_NAME}${name}`);
  }

  updateProductByName(products: Product[]) {
    this.showProductSearched = true;
    this.showCategory = false;
    this.showProductsForPrice = false;
    this.productByNameSubject.next(products);
  }

  getProductsByCategory(id: number) {
    console.log(id);
    this.showCategory = true;
    this.showProductsForPrice = false;
    this.showProductSearched = false;
    return this.http.get<Product[]>(`${this.URL_PRODUCTS_BY_CATEGORY}${id}`);
  }

  //Una vez hecho el metodo que reciba los productos es necesario hacer uno que guarde ese resultado en el subject
  updateProductsFilteredByCategory(products: Product[]): void {
    this.filteredProductsSubject.next(products);
  }

  getProductById(id: number) {
    console.log(id);
    return this.http.get<Product>(`${this.URL_PRODUCTS}/${id}`);
  }

  updateProductById(product: Product) {
    console.log(product);

    this.productByIdSubject.next(product);
  }

  getProductsByRange(min: number, max: number) {
    this.showProductsForPrice = true;
    this.showCategory = false;
    this.showProductSearched = false;
    return this.http.get<Product[]>(
      `https://api.escuelajs.co/api/v1/products/?price_min=${min}&price_max=${max}`
    );
  }

  updatedProductsByRange(products: Product[]) {
    this.filteredProductsSubject.next(products);
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

  getTeamPersons() {
    return this.http.get<{
      results: [];
      info: {};
    }>(this.URL_TEAM);
  }
}
