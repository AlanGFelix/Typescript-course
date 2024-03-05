import {Category} from './category.model';
import {BaseModel} from './base.model';

export interface Product extends BaseModel{
  title: string;
  price: string;
  description: string;
  categorie: Category;
  images: [];
}