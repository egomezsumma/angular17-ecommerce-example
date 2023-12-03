import { Routes } from '@angular/router';
import { ListComponent } from './presentation/products/pages/list/list.component';

export const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        title: "Lista de Productos"
    }
];
