import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../domain/product/product';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([
    {
      id: "1",
      title: "Producto #1",
      price: 150,
      img: "https://picsum.photos/440/440?r=12",
      creationMs: new Date().toISOString()
    },
    {
      id: "2",
      title: "Producto #2",
      price: 152,
      img: "https://picsum.photos/440/440?r=14",
      creationMs: new Date().toISOString()
    },
    {
      id: "3",
      title: "Producto #3",
      price: 152,
      img: "https://picsum.photos/440/440?r=16",
      creationMs: new Date().toISOString()
    }
  ])
  private cartRepo = inject(CartRepositoryService)
  cart = this.cartRepo.products

  addToCartHandler(product: Product) {
    this.cartRepo.addToCart(product)
  }
}
