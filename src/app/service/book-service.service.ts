import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Book} from '../model/book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private API_BOOK = environment.API_LOCAL + 'books';
  constructor(private http: HttpClient) { }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.API_BOOK, book);
  }
  pageBook(nextPage: any){
    const params = nextPage;
    return this.http.get(this.API_BOOK, {params}) // {params} thuoc ve ham get cua angular
  }
  detailBook(id: number): Observable<Book>{
    return this.http.get<Book>(this.API_BOOK+'/'+id);
    // return this.http.get<Category>(`${this.API_STUDENT}/${id}`)
  }
  updateBook(id: number, book: Book): Observable<Book>{
    return this.http.put<Book>(this.API_BOOK+'/'+id,book)
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(this.API_BOOK + '/' + id);
  }

  getListBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_BOOK);
  }

}
