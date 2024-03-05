import { Category } from "../models/category.model";
import { Product } from "./../models/product.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categorie' >{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto>{}