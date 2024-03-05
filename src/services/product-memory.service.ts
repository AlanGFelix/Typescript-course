import {faker} from '@faker-js/faker';
import {Product} from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';

class ProductMemoryService{
  private products : Product[] = [];

  private Add(data: Product){
    this.products.push(data);
  }
  
  Create(data: CreateProductDto){
    let {
      categoryId
    } =  data
  
    let newProduct = {
      id: faker.number.float(),
      ...data,
      categorie : {
        id: categoryId,
        name: faker.commerce.department(),
        image: faker.image.url()
      },
    }
    
    this.Add(newProduct);
  }
  
  
  Update(id: Product['id'], changes: UpdateProductDto){
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    };
    return this.products[index];
  }
  
  SearchProduct (id : Product['id']){
    return this.products.find(item => item.id === id);
  }
  
  Get(){
    return this.products;
  }
}