import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../domain/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {
  http = inject(HttpClient)
  // ref: https://fakeapi.platzi.com/en/rest/products/
  GET_PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products"

  getAllProducts() {
    return this.http.get<Product[]>(this.GET_PRODUCTS_URL)
  }
}
