import { AppConstants } from './../classes/appconstant';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

/**An http service for the requests of logging in and out requests */
@Injectable({
    providedIn: 'root'
  })

  export class LogInHttpService {
<<<<<<< HEAD

  url:string=AppConstants.baseURL;
=======
    url= 'http://5cb4a97d.ngrok.io';
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
    /**Constructor that takes HttpClient */
    constructor(private http:HttpClient) {}


    /**Sends a request to the server with the email and password to checks if they're correct */
 login(email:string,password:string): Observable<any>
 {
<<<<<<< HEAD
   return this.http.post(this.url+'/api/login',{email,password}) ;
=======
   return this.http.post(this.url +'/api/login',{email,password}) ;
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
 }


/**Sends a request to server with the variables that user entered to sign up a new user */
 signUp(email:string,password:string,password_confirmation:string,name:string,gender:string,birthday:Date,country:string,city:string): Observable<any>
 {
<<<<<<< HEAD
   return this.http.post(this.url+'/api/signup',{email,password,password_confirmation,name,gender,birthday,country,city}) ;
 }
/**Loggs out the user from the website */
 logOut():Observable<any>{
    return this.http.delete(this.url+'/api/logout');
=======
   return this.http.post(this.url +'/api/signup',{email,password,password_confirmation,name,gender,birthday,country,city}) ;
 }
/**Loggs out the user from the website */
 logOut():Observable<any>{
    return this.http.delete(this.url +'/api/logout');
>>>>>>> b4abd65753f5811b1850769bc743e7dbcf1514ab
  }

  resetPass(email:string): Observable<any> {
        
    return this.http.post<any>(this.url+'/api/forgotpassword',{email});
    
   }
  
  }
  
