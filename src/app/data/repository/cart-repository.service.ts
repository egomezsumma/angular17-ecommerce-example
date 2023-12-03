import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../domain/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartRepositoryService {
  products = signal<Product[]>([])
  total = computed(()=> {
    return this.products().reduce((total, prod) => total + prod.price, 0)
  })
  
  constructor() { }

  addToCart(product:Product) {
    this.products.update( prevs => [...prevs, product])
  }
}
