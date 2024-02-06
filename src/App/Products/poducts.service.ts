import {Product} from './products.model';
const products : Product[] = [];

export const AddProduct = (data: Product)=>{
  products.push(data);
}

export const UpdateProduct = (id:string, changes: Product)=>{
  
}

export const DeleteProduct = (id:string)=>{
  
}

export const SearchProduct = (id:string)=>{
  
}

export const GetProducts = ()=>{
  return products;
}