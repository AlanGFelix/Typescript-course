import { Product } from "./products.model";

export interface CreateProductDto extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categorie' >{
  categoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto>{}

export interface SearchProductDto extends Readonly<Partial<Omit<Product, 'categorie'| 'tags'>>>{
  categoryId?: string;
  readonly tags?: ReadonlyArray<string>;
}