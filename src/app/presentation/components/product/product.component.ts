import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { Product } from '../../../domain/product/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product! : Product;
  
  @Output() onAddToCart = new EventEmitter<Product>()
  
  addToCartHandler() {
    console.log("Agregando a", this.product.id)
    this.onAddToCart.emit(this.product)
  } 
}
