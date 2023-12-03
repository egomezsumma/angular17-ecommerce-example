import { Component, Input, SimpleChange, signal } from '@angular/core';
import { Product } from '../../../domain/product/product';
import { CommonModule } from '@angular/common';
import { ProductMiniComponent } from '../product-mini/product-mini.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductMiniComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  //@Input({required:true}) products!:Product[]
  products: Product[] = [
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
  ]


  hideSideMenu = signal(true)
  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev)
  }

  total = signal(0)

  ngOnChanges(changes: SimpleChange) {
    console.log(changes)
    const products = changes.hasOwnProperty("products")
    if (products) {
      const tot = this.products.reduce((total, prod) => total + prod.price, 0)
      this.total.set(tot)
    }
  }
}
