import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/product/product';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';
import { ProductsRepositoryService } from '../../../data/repository/products-repository.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])
  private productsRepo = inject(ProductsRepositoryService)
  private cartRepo = inject(CartRepositoryService)
  cart = this.cartRepo.products

  ngOnInit() {
    this.productsRepo.getAllProducts().subscribe({
      next: (products) => {
        console.log(products)
        products.shift()// saco el primero porque tiene una imagen q no encaja
        this.products.set(products)
      },
      error:(err) => {
        console.error(err)
      }
    })
  }
  
  addToCartHandler(product: Product) {
    this.cartRepo.addToCart(product)
  }
}
