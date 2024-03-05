import {Category} from './category.model';
import {BaseModel} from './base.model';

export interface Product extends BaseModel{
  title: string;
  price: number;
  description: string;
  categorie: Category;
  images: [];
}