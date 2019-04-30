import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service/product.service';
import Products from '../../models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private ProductService: ProductService) { }
  products: Products[];
  productsTimeOut: Products[];
  productsHighest: Products[];
  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.ProductService.getProducts().subscribe(data => this.products = data);
    this.ProductService.getProductsTimeOut().subscribe(data=>this.productsTimeOut=data);
    this.ProductService.getProductsHighest().subscribe(data=>this.productsHighest=data);
  }
  
}
