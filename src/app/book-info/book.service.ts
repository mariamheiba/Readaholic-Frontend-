import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { book } from '../classes/book';
import { review } from '../classes/review';
import { HttpClient, HttpParams } from '@angular/common/http';
import { userBookInfo } from '../classes/userBookInfo';

/**handles book related http requests */
@Injectable({
  providedIn: 'root'
})

export class BookService {
/**@param {HttpClient} http to handle http requests get,post etc */
  constructor(private http:HttpClient) { }

  /**
   * gets the selected book information by id
   * @param {number} id the book id
   * @returns the book of the passed id
   */
  getBook(id: number): Observable<any> {
  //  return this.http.get<book>('http://localhost:3000/book/'+id);
    //let params = new HttpParams({ fromObject: { book_id:id} });
    return this.http.get('http://ec2-3-87-221-152.compute-1.amazonaws.com//books/show?book_id='+id);
 }

 /**
  * gets the reviews of the book
  * @param {number} id the book id
  * @returns the reviews array of the selected book
  */
 getBookReviews(id: number): Observable<any> {
  //let params = new HttpParams().set("bookId",id);
  return this.http.get<any>('http://ec2-3-87-221-152.compute-1.amazonaws.com//showReviewsForABook?bookId='+id);
  // return this.http.get<review[]>("http://localhost:3000/review");
 }

 /** 
  * gets user related book info
  * @param {number} id the book id
  * @returs user ralated book info
  * @example when we pass the book id the function tells us if the user has this book on any of his shelves, if he rated it or posted a review
  *  */
 getUserBookInfo(id: number): Observable<any> {
  return this.http.get<userBookInfo>('http://ec2-3-87-221-152.compute-1.amazonaws.com//showReviewForBookForUser?bookId='+id);
}

/**
 * create book review
 * @param {number} bookId id of the reviewd book
 * @param {number} shelf the id of the shelf
 * @param {string} body the body of the review
 * @param {number rating the user rating of the book}
 *  */
createReview(bookId:number, shelf: number, body: string, rating: number): Observable<any> {
  if(body == "")
  {
    return this.http.post('http://ec2-3-87-221-152.compute-1.amazonaws.com//reviwes/create',{bookId,shelf,rating});
  }
  else
  {
    return this.http.post('http://ec2-3-87-221-152.compute-1.amazonaws.com//reviwes/create',{bookId,shelf,body,rating});
  }

   // return this.http.post('http://localhost:3000/ReadShelf',{bookId,shelf,body,rating});
}


}
