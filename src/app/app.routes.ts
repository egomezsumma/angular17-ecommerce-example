import { Routes } from '@angular/router';
import { ListComponent } from './presentation/pages/list/list.component';
import { NotFoundComponent } from './presentation/pages/not-found/not-found.component';
import { AboutComponent } from './presentation/pages/about/about.component';
import { ProductDetailComponent } from './presentation/pages/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        title: "Lista de Productos"
    },
    {
        path: "product/:id",
        component: ProductDetailComponent
    },
    {
        path: "about",
        component: AboutComponent,
        title: "Sobre nosotros"
    },
    {
        path: "**",
        component: NotFoundComponent,
        title: "Ups, Not Found"
    }
];
