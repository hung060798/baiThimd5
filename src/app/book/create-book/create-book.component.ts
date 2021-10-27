import {Component, OnInit} from '@angular/core';
import {Book} from '../../model/book';
import {BookServiceService} from '../../service/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  form: any = {};
  book: Book;
  status = 'Please fill in the form to create category';

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.book = new Book(
      this.form.title,
      this.form.author,
      this.form.description
    );
    console.log('student123' + this.book);
    this.bookService.createBook(this.book).subscribe(data => {
      console.log('data ==> ', data);
      this.status = 'oke';
    });
  }
}
