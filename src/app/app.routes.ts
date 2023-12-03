import { Routes } from '@angular/router';
import { ListComponent } from './presentation/pages/list/list.component';
import { NotFoundComponent } from './presentation/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: ListComponent,
        title: "Lista de Productos"
    },
    {
        path: "**",
        component: NotFoundComponent,
        title: "Ups, Not Found"
    }
];
