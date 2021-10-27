import {Component, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../model/book';
import {MatPaginator} from '@angular/material/paginator';
import {BookServiceService} from '../../service/book-service.service';

import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'description','edit', 'delete'];
  dataSource : any;
  books: Book[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private bookService: BookServiceService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListBook();
  }

  private getListBook() {
    this.bookService.getListBook().subscribe(listBook =>{
      this.books = listBook;
      console.log('listCTG = > ', this.books);

      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() =>{
      // window.location.reload();
      this.getListBook();
    })
  }

  openDialog(id:number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBook(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
