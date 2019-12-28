import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import{environment} from './../environments/environment';
import{AngularFireModule}  from '@angular/fire'
import{AngularFireDatabaseModule}  from '@angular/fire/database';
import{AngularFireAuthModule}  from '@angular/fire/auth';
import {FormsModule}  from '@angular/forms';
import { BookHomeComponent } from './book-home/book-home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookCardComponent } from './book-card/book-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import {BookService} from './book.service';

@NgModule({
  declarations: [AppComponent, BookHomeComponent, BookListComponent, BookFormComponent, BookCardComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.fireconfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [BookService,ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
