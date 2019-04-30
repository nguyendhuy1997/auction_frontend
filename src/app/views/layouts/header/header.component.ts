import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product-service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Category} from '../../../models/category';
import { Location } from '@angular/common';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ProductService: ProductService,private router: Router) { }

  myControl = new FormControl();
  stateCtrl = new FormControl();
  searchKey:string;
  test:any;
  userId:string=localStorage.getItem('user_id');
  
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
  autoComplete()
  {
    let product={
      name:this.searchKey
    };
    this.ProductService.autoComplete(product).subscribe(data=>{
      this.test=data;
      console.log(this.test);
    })
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
