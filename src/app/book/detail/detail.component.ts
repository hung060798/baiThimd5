import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookServiceService} from '../../service/book-service.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  book: Book;
  constructor(private bookService: BookServiceService,
              private atRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.atRouter.paramMap.subscribe(data =>{
      const id = parseInt(<string> data.get('id')) ;
      this.getBook(id)
    })
  }
  getBook(id:number){
    this.bookService.detailBook(id).subscribe(data =>{
      this.book=data;
    });
  }
}
