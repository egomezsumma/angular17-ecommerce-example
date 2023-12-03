import { Component, Input } from '@angular/core';
import { Product } from '../../../domain/product/product';

@Component({
  selector: 'app-product-mini',
  standalone: true,
  imports: [],
  templateUrl: './product-mini.component.html'
})
export class ProductMiniComponent {
  @Input({required:true}) product!:Product
}
