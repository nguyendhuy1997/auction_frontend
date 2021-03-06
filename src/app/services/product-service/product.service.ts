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
    return this.http.get<Product[]>('https://auctionbackend.herokuapp.com/product');
  };
  getProductsTimeOut(): Observable<Product[]> {
    return this.http.get<Product[]>('https://auctionbackend.herokuapp.com/producttimeout');
  };
  getProductsHighest(): Observable<Product[]> {
    return this.http.get<Product[]>('https://auctionbackend.herokuapp.com/producthighest');
  };
  getDetail(id:string): Observable<Product> {
    return this.http.get<Product>(`https://auctionbackend.herokuapp.com/product/${id}`);
  };
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('https://auctionbackend.herokuapp.com/category');
  };
  getProductCategory(id:string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://auctionbackend.herokuapp.com/productcategory/${id}`);
  };
  getRelativeProduct(product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/relativeproduct',product,httpOptions);
  }
  loadMore(product):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/loadmore',product,httpOptions);
  }
  autoComplete(searchKey):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/autocomplete',searchKey,httpOptions);
  }
  lastBid(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/lastbid',user,httpOptions);
  }
  wishlist(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/wishlist',user,httpOptions);
  }
  getWishlist(user):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({ 'Accept': 'application/json',
      'Content-Type': 'application/json',
      })
    };
    return this.http.post<any>('https://auctionbackend.herokuapp.com/getwishlist',user,httpOptions);
  }

}