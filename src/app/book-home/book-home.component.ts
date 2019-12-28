import { Component, OnInit } from '@angular/core';
import{BookService}  from '../book.service';
import {Book} from '../book.model';
@Component({
  selector: 'book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css']
})
export class BookHomeComponent implements OnInit {
  books;
  constructor(private bookService:BookService){}
  
  ngOnInit(){
    this.getBooks();
  }

  getBooks(){
  this.bookService.getBooks().subscribe(books=>{
    this.books=books;
    console.log(this.books);
  });
 
  }
  
  saveBook(book){
    this.bookService.saveBook(book);
   }
  
}
