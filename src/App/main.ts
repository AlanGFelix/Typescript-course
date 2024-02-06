import {faker} from '@faker-js/faker';
import {AddProduct, GetProducts} from './Products/poducts.service';

for(let i= 0; i<10; i++){
  AddProduct({
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    image: faker.image.url(),
    stock: faker.number.float({min:10,max:100}),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    price: faker.commerce.price(),
    tags:faker.helpers.arrayElements(['technologie','fashion','shorts','shirts','hats', 'jackets']),
    categorie : {
      id: faker.string.uuid(),
      createdAt:faker.date.recent(),
      updatedAt:faker.date.recent(),
      name: faker.commerce.department()
    },
    size:faker.helpers.arrayElement(['S','L','M','L','XL'])
  });
}

console.log(GetProducts());
