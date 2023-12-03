import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { Product } from '../../../../domain/product/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product! : Product;
  /*img = computed(()=> `https://picsum.photos/440/440?r=${this.id}`)
  title = computed(()=> `Product ${this.id}`)
  @Input() price : number = 0;*/
  
  @Output() onAddToCart = new EventEmitter<string>()
  
  addToCartHandler() {
    console.log("Agregando a", this.product.id)
    this.onAddToCart.emit( `Agregando a ${this.product.id}`)
  } 
}
