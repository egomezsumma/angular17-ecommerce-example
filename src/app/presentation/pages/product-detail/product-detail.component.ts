import { Component, Input, inject, signal } from '@angular/core';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';
import { Product } from '../../../domain/product/product';
import { ProductsRepositoryService } from '../../../data/repository/products-repository.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl:'./product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input({ required: true }) id?: string;
  product = signal<Product|null>(null);
  private productsRepo = inject(ProductsRepositoryService)
  private cartRepo = inject(CartRepositoryService)
  cart = this.cartRepo.products
  currentBigImgUrl = signal("")

  ngOnInit() {
    this.fetchProduct()
  }

  private fetchProduct() {
    if(!this.id) {
      console.error("No me pasaron id")
      return;
    }

    this.productsRepo.getProductById(this.id!!).subscribe({
      next: (prod: Product) => {
        this.product.set(prod)
        this.currentBigImgUrl.set(prod.images[0])
      },
      error: (err) => {
        console.error("error", err)
      }
    })
  }

  addToCartHandler() {
    this.cartRepo.addToCart(this.product()!!)
  }
}
