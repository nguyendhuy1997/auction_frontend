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
  tittle:string;
  products: Products[];
  getProductCategory(){
    let id:any = this.route.snapshot.paramMap.get('id');
    this.ProductService.getProductCategory(id).subscribe(data => {
      this.products=data;
      console.log(this.products); 
    });
    this.ProductService.getCategory().subscribe(data=>{
      this.tittle=data[id-1].name;
    })
  }
  loadMore(){
    const product={
      id:this.route.snapshot.paramMap.get('id'),
      offSet:this.products.length,
    }
    
    this.ProductService.loadMore(product).subscribe(data => {
        data.forEach(element => {
          this.products.push(element);
      });
    });
  }

}
