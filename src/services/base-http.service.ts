import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class BaseHTTPService<TM/*Type Main*/>{
  private api = axios.create({baseURL:this.url})

  constructor(private url: string){}
  async getAll() {
    const { data } = await this.api.get<TM[]>('/products')
    return data
  }
  async update<T, DTO>(id: T, changes: DTO) {
    const { data } = await this.api.put<TM>(`/products/${id}`, changes)
    return data
  }
  async create<DTO>(dto: DTO) {
    const { data } = await this.api.post<TM>('/products', dto)
    return data
  }
  async findOne<T>(id: T) {
    const { data } = await this.api.get<TM>(`/products/${id}`)
    return data
  }
}

(async () => {
  const url = 'https://api.escuelajs.co/api/v1';
  const productService = new BaseHTTPService<Product>(url);
  const products = await productService.getAll()
  console.log(products.length);
})()

