import { Book} from './book.model';
import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart { 
  items: ShoppingCartItem[] = [];

  constructor(private itemsMap: { [bookId: string]: ShoppingCartItem }) {
    this.itemsMap = itemsMap || {};
    
    for (let bookId in itemsMap) {
      let item = itemsMap[bookId];
      this.items.push(new ShoppingCartItem({ ...item, $key: bookId }));
    }
  }

  getQuantity(book: Book) {
    let item = this.itemsMap[book.$key];
    return item ? item.quantity : 0;
  }
  

  get totalItemsCount() {
    let count = 0;
    for (let bookId in this.itemsMap) 
      count += this.itemsMap[bookId].quantity;
    return count;
  }
}