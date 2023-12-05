import { Component, Input, SimpleChange, computed, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/product/product';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';
import { ProductsRepositoryService } from '../../../data/repository/products-repository.service';
import { Category } from '../../../domain/product/category';
import { CategoryRepositoryService } from '../../../data/repository/category-repository.service';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule, RouterLinkWithHref],
  templateUrl: './list.component.html'
})
export default class ListComponent {
  // Services
  //
  private cartRepo = inject(CartRepositoryService)
  private productsRepo = inject(ProductsRepositoryService)
  private categoriesRepo = inject(CategoryRepositoryService)

  // Estados
  //
  products = signal<Product[]>([])
  categories = signal<Category[]>([])
  @Input() category_id?: string;
  cart = this.cartRepo.products

  
  // Efectos
  //
  
  // Si cambia el filtro de category hago fetch de nuevo con el filtro al server
  ngOnChanges() {
    console.log(this.category_id)
    this.fetchProducts()
  }
  
  ngOnInit() {
    //this.fetchProducts() --> no hace falta porque se hace en el ngOnChanges
    this.fetchCategories()
  }

  // Methodos:
  //
  addToCartHandler(product: Product) {
    this.cartRepo.addToCart(product)
  }

  private fetchProducts() {
    this.productsRepo.getAllProducts(this.category_id).subscribe({
      next: (products) => {
        console.log(products)
        //products.shift()// saco el primero porque tiene una imagen q no encaja
        this.products.set(products)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  private fetchCategories() {
    this.categoriesRepo.getAllCategories().subscribe({
      next: (data) => {
        console.log("categories", data)
        this.categories.set(data)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
