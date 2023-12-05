import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../../domain/product/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryRepositoryService {
  http = inject(HttpClient)
  getAllCategories() {
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`)
  }
}
