import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import Product from '../../models/product';
import { catchError, map, tap } from 'rxjs/operators';
import {Category} from '../../models/category';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private location: Location) { }
  /** POST: add a new hero to the database */
  login(user: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/login',user,httpOptions);
  }
  register(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/register',user,httpOptions);
  }

  checkEmail(email:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/checkemail',email,httpOptions);
  }
  history(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/history',user,httpOptions);
  }
  postProduct(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/postproduct',user,httpOptions);
  }
  getEmail(id:number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/getemail/${id}`);
  };
  wishStatus(user:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/wishstatus',user,httpOptions);
  }
}
