import axios from 'axios';

import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

export class ProductHTTPService implements ProductService{
  private url = 'https://api.escuelajs.co/api/v1';
  private api = axios.create({baseURL:this.url})
  async getAll() {
    const { data } = await this.api.get<Product[]>('/products')
    return data
  }
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await this.api.put<Product>(`/products/${id}`, changes)
    return data
  }
  async create(dto: CreateProductDto) {
    const { data } = await this.api.post<Product>('/products', dto)
    return data
  }
  async findOne(id: number) {
    const { data } = await this.api.get<Product>(`/products/${id}`)
    return data
  }
}