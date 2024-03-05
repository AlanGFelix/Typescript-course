import { ProductHTTPService } from "./services/producto-http.service";

(async()=>{
  const productService = new ProductHTTPService();

  console.log('-'.repeat(10));
  const products = await productService.getAll();
  console.log(products.length);
  console.log(products.map(item => item.price));

  const productId = products[0].id;
  console.log(typeof productId);
  
  await productService.update(productId,{
    price: 1002,
    title: 'Alan Product',
    description: 'Un producto agregado por mí'
  })

  const product = await productService.findOne(productId);
  console.log(product);
})()