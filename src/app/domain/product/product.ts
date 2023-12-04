import { Category } from "./category";

export interface Product {
    id: string;
    title: string;
    description:string;
    price: number;
    images:string[];
    creationAt: string,
    category: Category
}