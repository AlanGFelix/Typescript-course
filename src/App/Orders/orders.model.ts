import {Product} from './../Products/products.model';
import {User} from './../Users/User.model';
import {BaseModel} from './../base.model';

export interface Order extends BaseModel{
  products: Product;
  user: User;
}