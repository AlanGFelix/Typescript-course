import {faker} from '@faker-js/faker';
import {Product} from './products.model';
import { CreateProductDto, UpdateProductDto, SearchProductDto } from './products.dto';
const products : Product[] = [];

export const AddProduct = (data: Product)=>{
  products.push(data);
}

export const CreateProduct = (data: CreateProductDto)=>{
  let {
    title,
    image,
    stock,
    color,
    isNew,
    price,
    tags,
    size,
    categoryId
  } =  data

  let newProduct = {
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    title,
    image,
    stock,
    color,
    isNew,
    price,
    tags,
    size,
    categorie : {
      id: categoryId,
      createdAt:faker.date.recent(),
      updatedAt:faker.date.recent(),
      name: faker.commerce.department()
    },
  }
  
  AddProduct(newProduct);
}


export const UpdateProduct = (id:string, changes: UpdateProductDto):Product=>{
  const index = products.findIndex(item => item.id === id);
  const prevData = products[index];
  products[index] = {
    ...prevData,
    ...changes
  };
  return products[index];
}

export const SearchProduct = (dto:SearchProductDto):Product[]=>{
  return products;
}

export const GetProducts = ()=>{
  return products;
}