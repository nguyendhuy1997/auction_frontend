import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }
  bid(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionfrontend.herokuapp.com/bid',user,httpOptions);
  }
  buyNow(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionfrontend.herokuapp.com/buynow',user,httpOptions);
  }
  countDown(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionfrontend.herokuapp.com/countdown',user,httpOptions);
  }
  test(){
    console.log('work');
  }
}
