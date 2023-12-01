import { Component, EventEmitter, Input, Output, computed } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) id : number = 0;
  img = computed(()=> `https://picsum.photos/440/440?r=${this.id}`)
  @Input() price : number = 0;

  @Output() onAddToCart = new EventEmitter<string>()
  
  addtToCarHandler() {
    console.log("Agregando a", this.id)
    this.onAddToCart.emit( `Agregando a ${this.id}`)
  } 
}
