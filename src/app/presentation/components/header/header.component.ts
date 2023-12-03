import { Component, Input, SimpleChange, inject, signal } from '@angular/core';
import { Product } from '../../../domain/product/product';
import { CommonModule } from '@angular/common';
import { ProductMiniComponent } from '../product-mini/product-mini.component';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductMiniComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private cartRepo = inject(CartRepositoryService)
  products = this.cartRepo.products
  total = this.cartRepo.total

  hideSideMenu = signal(true)
  toggleSideMenu() {
    this.hideSideMenu.update(prev => !prev)
  }

}
