import { Component, OnInit, Input } from '@angular/core';
import {Book} from '../book.model'
import {AngularFireDatabase} from '@angular/fire/database';
import{ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent  {
@Input('book') book:Book;

constructor(private db:AngularFireDatabase,private cartService:ShoppingCartService){}

async AddToCart(book:Book){
this.cartService.addToCart(book);
 }
 
 
}
