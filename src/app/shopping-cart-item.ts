import { Book} from './book.model';

export class ShoppingCartItem {
  author:string;
  categories:string;
  isbn:string;
  shortDescription:string;
  status:string;
  thumbnailUrl :string;
  title:string; 
  quantity: number; 

  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  
}