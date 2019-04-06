import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import {Category} from '../../../models/category';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProductService: ProductService) { }

  ngOnInit() {
    this.getCategory();
    
  }
  category:Category[];
  getCategory(){
    this.ProductService.getCategory().subscribe(data => {
      this.category = data;
      console.log(this.category);
    });
  }

}
