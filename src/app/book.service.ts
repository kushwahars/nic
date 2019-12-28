import { Injectable } from '@angular/core';
import{AngularFireDatabase} from '@angular/fire/database';
import {Book} from './book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {

 constructor(private db:AngularFireDatabase){}

  getBooks(){
    return this.db.list('/BookStore').valueChanges();
   }

  saveBook(book:Book){
  this.db.list('/BookStore').push(book);
  }
}
