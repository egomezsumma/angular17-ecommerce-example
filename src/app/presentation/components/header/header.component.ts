import { Component, Input, SimpleChange, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMiniComponent } from '../product-mini/product-mini.component';
import { CartRepositoryService } from '../../../data/repository/cart-repository.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ProductMiniComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html'
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
