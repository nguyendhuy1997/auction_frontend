import { Injectable } from '@angular/core';
import Product from '../../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';
import { Category } from '../../models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient,  
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private location: Location) {

  }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/product');
  };
  getProductsTimeOut(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/producttimeout');
  };
  getProductsHighest(): Observable<Product[]> {
    return this.http.get<Product[]>('http://127.0.0.1:8000/producthighest');
  };
  getDetail(id:string): Observable<Product> {
    return this.http.get<Product>(`http://127.0.0.1:8000/product/${id}`);
  };
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://127.0.0.1:8000/category');
  };
  getProductCategory(id:string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://127.0.0.1:8000/productcategory/${id}`);
  };
  getRelativeProduct(product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/relativeproduct',product,httpOptions);
  }
  loadMore(product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/loadmore',product,httpOptions);
  }
  autoComplete(searchKey):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/autocomplete',searchKey,httpOptions);
  }
  lastBid(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/lastbid',user,httpOptions);
  }
  wishlist(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/wishlist',user,httpOptions);
  }
  getWishlist(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/getwishlist',user,httpOptions);
  }

}