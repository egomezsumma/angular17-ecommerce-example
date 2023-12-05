import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../domain/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {
  http = inject(HttpClient)
  // ref: https://fakeapi.platzi.com/en/rest/products/
  PRODUCTS_BASE_URL = "https://api.escuelajs.co/api/v1/products"

  getAllProducts(category_id?:string) {
    let url = new URL(this.PRODUCTS_BASE_URL)
    if(category_id){
      url.searchParams.set("categoryId",  category_id )  
    }
    return this.http.get<Product[]>(url.toString())
  }

  getProductById(id:string) {
    return this.http.get<Product>(this.PRODUCTS_BASE_URL +`/${id}`)
  }
}
