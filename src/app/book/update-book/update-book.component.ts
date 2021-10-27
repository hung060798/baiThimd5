import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {ActivatedRoute} from '@angular/router';
import {BookServiceService} from '../../service/book-service.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  book : Book;
  status : any;
  constructor(private atRouter: ActivatedRoute,
              private bookService: BookServiceService) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(bookId => {
      const id = +bookId.get('id');
      this.bookService.detailBook(id).subscribe(book => {
        this.book = book;
      });
    });
  }

  ngSubmit() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(data=>{
      this.status = "oke";
    })
  }

}
