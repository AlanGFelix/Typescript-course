import {Category} from '../Categories/category.model';
import {BaseModel} from './../base.model';
export type Sizes = 'S' | 'M'| 'L'| 'XL';

export interface Product extends BaseModel{
  title: string;
  stock: number;
  size?: Sizes;
  image: string;
  color: string,
  price: string,
  categorie: Category;
  isNew: boolean;
  tags: string[]
}