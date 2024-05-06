import { Component } from '@angular/core';
import { cart} from 'src/assets/books.js';
@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  constructor(){}

  ngOnInit(){
    cart();

  }

}
