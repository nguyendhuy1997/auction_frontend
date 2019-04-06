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
  getDetail(id:string): Observable<Product> {
    return this.http.get<Product>(`http://127.0.0.1:8000/product/${id}`);
  };
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://127.0.0.1:8000/category');
  };
  getProductCategory(id:string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://127.0.0.1:8000/productcategory/${id}`);
  };

}