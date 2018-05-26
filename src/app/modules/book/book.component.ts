import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  request: any;
  titulo: string;
  booksData: Array<Object> = [];
  query: string;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

      }

  search() {

    this.request = this.bookService.getBook(this.query).
		subscribe(
			data => {
				//console.log(data.items);
				this.booksData = data.items,
				error => console.error('Error: ' + error)
			}
		);
  }

}
