import { Book } from './book.model';
import { AngularFireDatabase} from '@angular/fire/database';
import {ShoppingCart} from './shopping-cart';
import { Injectable } from '@angular/core';


@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
   
  }

 async addToCart(book: Book) { 
    this.updateItem(book, 1);
  }


  async removeFromCart(book: Book) {
    this.updateItem(book, -1);
  }

  async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  


 public create() { 
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }
   

  getItem(cartId:string,bookId:string){
    return this.db.object('/shopping-carts/'+cartId+'/items/'+bookId);
  }

  async getOrCreateCartId(){
    let cartId=localStorage.getItem('cartId');
    if (cartId) return cartId; 
    let result = await this.create();
    localStorage.setItem('cartId',result.key);
    return result.key;
   }
   async updateItem(book:Book,change:number){
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId, book.isbn);
      item$.update({ 
        author:book.author,
        categories:book.categories,
        isbn:book.isbn,
        shortDescription:book.shortDescription,
        status:book.status,
        thumbnailUrl :book.thumbnailUrl,
        title:book.title,
        quantity: 1
      });
    
  }

 
}
