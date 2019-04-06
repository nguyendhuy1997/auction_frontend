import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import Products from '../../models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private ProductService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductCategory();

  }
  products: Products[];
  getProductCategory(){
    const id = this.route.snapshot.paramMap.get('id');
    this.ProductService.getProductCategory(id).subscribe(data => {
      this.products=data;
      console.log(this.products);
    });
  }

}
