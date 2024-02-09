import {faker} from '@faker-js/faker';
import {AddProduct, CreateProduct, GetProducts, UpdateProduct, SearchProduct} from './Products/products.service';

for(let i= 0; i<10; i++){
  CreateProduct({
    title: faker.commerce.productName(),
    image: faker.image.url(),
    stock: faker.number.float({min:10,max:100}),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    price: faker.commerce.price(),
    tags:faker.helpers.arrayElements(['technologie','fashion','shorts','shirts','hats', 'jackets']),
    size:faker.helpers.arrayElement(['S','L','M','L','XL']),
    categoryId: faker.string.uuid()
  });
}

UpdateProduct('12',{});

SearchProduct({
  
});

console.log(GetProducts());
