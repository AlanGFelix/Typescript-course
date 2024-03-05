import {faker} from '@faker-js/faker';
import {Product} from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

class ProductMemoryService implements ProductService{
  private products : Product[] = [];

  private add(data: Product){
    this.products.push(data);
  }
  
  create(data: CreateProductDto){
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
    
    this.add(newProduct);

    return newProduct;
  }
  
  
  update(id: Product['id'], changes: UpdateProductDto){
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    };
    return this.products[index];
  }
  
  findOne (id : Product['id']){
    return this.products.find(item => item.id === id);
  }
  
  getAll(){
    return this.products;
  }
}